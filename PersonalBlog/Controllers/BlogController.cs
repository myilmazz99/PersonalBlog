﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using PersonalBlog.Extensions;
using PersonalBlog.Models;
using Entities.Dtos;

namespace PersonalBlog.Controllers
{
    [Authorize]
    [Route("admin/blogs/[action]")]
    public class BlogController : Controller
    {
        private readonly IBlogService _blogService;
        private readonly ICategoryService _categoryService;
        private readonly IAccountService _accountService;

        public BlogController(IBlogService blogService, ICategoryService categoryService, IAccountService accountService)
        {
            _blogService = blogService;
            _categoryService = categoryService;
            _accountService = accountService;
        }

        public async Task<IActionResult> BlogList()
        {
            var result = await _blogService.GetAll();

            if (result.Success)
            {
                return View(result.Data);
            }

            return View("Error");
        }

        public async Task<IActionResult> AddOrUpdate(int? blogId)
        {
            if (blogId != null)
            {
                var result = await _blogService.GetByIdWithImages((int)blogId);
                var model = new AddOrUpdateBlogViewModel
                {
                    CategoryList = await GetCategories(result.Data.CategoryId),
                    AddOrUpdateBlogDto = result.Data
                };

                return View(model);
            }
            else
            {
                return View(new AddOrUpdateBlogViewModel
                {
                    CategoryList = await GetCategories(),
                    AddOrUpdateBlogDto = new AddOrUpdateBlogDto()
                });
            }

        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdate(AddOrUpdateBlogViewModel model, IFormFile mainImage)
        {
            if (mainImage != null)
            {
                var dir = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\img\uploads");
                var filePath = Path.Combine(dir, mainImage.FileName);
                var imageUrl = Path.Combine(Path.DirectorySeparatorChar.ToString(), "img", "uploads", mainImage.FileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await mainImage.CopyToAsync(stream);
                }

                model.AddOrUpdateBlogDto.MainImage = imageUrl;
            }

            //apply writer
            var userIdResult = _accountService.GetUserId(HttpContext.User);
            model.AddOrUpdateBlogDto.WriterId = userIdResult.Data;

            var result = await _blogService.AddOrUpdate(model.AddOrUpdateBlogDto);

            if (result.Success)
            {
                if (model.AddOrUpdateBlogDto.BlogId == 0)
                {
                    model.AddOrUpdateBlogDto.BlogId = result.Data;
                    model.CategoryList = await GetCategories(model.AddOrUpdateBlogDto.CategoryId);
                    return View(model);
                }

                TempData.Put("message", new ResultMessageViewModel { Message = result.Message, CssColor = CssColor.success });
                return RedirectToAction("BlogList");
            }
            else
            {
                return View("Error");
            }
        }

        public async Task<IActionResult> Delete(int blogId)
        {
            var result = await _blogService.Delete(blogId);
            if (result.Success)
            {
                TempData.Put("message", new ResultMessageViewModel { Message = result.Message, CssColor = CssColor.danger });
                return NoContent();
            }

            return BadRequest();
        }

        public async Task<IActionResult> UploadMultipleImages(List<IFormFile> files, int? blogId)
        {
            if (files == null || blogId == null)
            {
                return BadRequest();
            }

            var blog = await _blogService.GetByIdWithImages((int)blogId);

            if (blog.Success)
            {
                var dir = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/img/uploads");

                foreach (var item in files)
                {
                    var filePath = Path.Combine(dir, item.FileName);
                    var imageUrl = Path.Combine(Path.DirectorySeparatorChar.ToString(), "img", "uploads", item.FileName);
                    if (blog.Data.BlogImages.Find(i => i.ImageUrl == imageUrl) != null)
                    {
                        return BadRequest($"{item.FileName} adında bir dosya daha bulundu. Lütfen ismini değiştiriniz.");
                    }

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await item.CopyToAsync(stream);
                        blog.Data.BlogImages.Add(new BlogImage { BlogId = (int)blogId, ImageUrl = imageUrl });
                    }
                }

                var result = await _blogService.AddImages(blog.Data);

                return Ok();
            }

            return BadRequest("Resimler yüklenemedi.");

        }

        public async Task<IActionResult> DeleteImage(int blogImageId, int blogId)
        {
            var result = await _blogService.DeleteImage(blogImageId);
            if (result.Success)
            {
                TempData.Put("message", new ResultMessageViewModel { Message = result.Message, CssColor = CssColor.danger });
                return RedirectToAction("AddOrUpdate", new { blogId });
            }

            return View("Error");
        }

        private async Task<List<SelectListItem>> GetCategories(int selectedCategoryId = 0)
        {
            var categories = await _categoryService.GetAll();

            var selectList = new List<SelectListItem>();

            foreach (var item in categories.Data)
            {
                selectList.Add(new SelectListItem { Text = item.CategoryName, Value = item.CategoryId.ToString(), Selected = item.CategoryId == selectedCategoryId ? true : false });
            }

            return selectList;
        }
    }
}