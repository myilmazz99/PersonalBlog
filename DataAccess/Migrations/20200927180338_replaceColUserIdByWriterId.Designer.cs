﻿// <auto-generated />
using System;
using DataAccess.Concrete.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DataAccess.Migrations
{
    [DbContext(typeof(BlogContext))]
    [Migration("20200927180338_replaceColUserIdByWriterId")]
    partial class replaceColUserIdByWriterId
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entities.Concrete.Blog", b =>
                {
                    b.Property<int>("BlogId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("AddedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Header")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsPublished")
                        .HasColumnType("bit");

                    b.Property<string>("MainImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ViewCount")
                        .HasColumnType("int");

                    b.Property<string>("WriterId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BlogId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Blogs");
                });

            modelBuilder.Entity("Entities.Concrete.BlogImage", b =>
                {
                    b.Property<int>("BlogImageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BlogId")
                        .HasColumnType("int");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BlogImageId");

                    b.HasIndex("BlogId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("Entities.Concrete.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Entities.Concrete.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BlogId")
                        .HasColumnType("int");

                    b.Property<string>("CommentText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CommentId");

                    b.HasIndex("BlogId");

                    b.ToTable("Comment");
                });

            modelBuilder.Entity("Entities.Concrete.Blog", b =>
                {
                    b.HasOne("Entities.Concrete.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Entities.Concrete.BlogImage", b =>
                {
                    b.HasOne("Entities.Concrete.Blog", null)
                        .WithMany("BlogImages")
                        .HasForeignKey("BlogId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Entities.Concrete.Comment", b =>
                {
                    b.HasOne("Entities.Concrete.Blog", null)
                        .WithMany("Comments")
                        .HasForeignKey("BlogId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
