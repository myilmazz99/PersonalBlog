using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PersonalBlog.Extensions;
using PersonalBlog.Models;

namespace PersonalBlog.Controllers
{
    [Authorize]
    [Route("admin/categories/[action]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryService categoryService;

        public CategoryController(ICategoryService _categoryService)
        {
            categoryService = _categoryService;
        }

        public async Task<IActionResult> CategoryList()
        {
            var categories = await categoryService.GetAll();
            if (categories.Success)
            {
                var model = categories.Data.Select(i => new CategoryViewModel { CategoryId = i.CategoryId, CategoryName = i.CategoryName }).ToList();

                return View(model);
            }

            return View("Error");
        }

        public async Task<IActionResult> AddOrUpdate(int? categoryId)
        {
            if(categoryId == null)
            {
                return View(new AddOrUpdateCategoryViewModel());
            }
            else
            {
                var category = await categoryService.GetById((int)categoryId);
                if (category.Success)
                {
                    return View(new AddOrUpdateCategoryViewModel { CategoryId = category.Data.CategoryId, CategoryName = category.Data.CategoryName });
                }

                return RedirectToAction("Error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdate(AddOrUpdateCategoryViewModel model)
        {
            if (ModelState.IsValid)
            {
                var category = new Category { CategoryId = model.CategoryId, CategoryName = model.CategoryName };
                var result = await categoryService.AddOrUpdate(category);
                if (result.Success)
                {
                    TempData.Put("message", new ResultMessageViewModel { Message = result.Message, CssColor = CssColor.success });
                    return RedirectToAction("CategoryList");
                }

                return View("Error");
                
            }

            return View(model);
        }

        public async Task<IActionResult> Delete(int categoryId)
        {
            var result = await categoryService.Delete(categoryId);
            if (result.Success)
            {
                TempData.Put("message", new ResultMessageViewModel { Message = result.Message, CssColor = CssColor.danger });
                return NoContent();
            }

            return BadRequest();
        }
    }
}