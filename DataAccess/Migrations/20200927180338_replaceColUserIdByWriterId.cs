using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class replaceColUserIdByWriterId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Blogs");

            migrationBuilder.AddColumn<string>(
                name: "WriterId",
                table: "Blogs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WriterId",
                table: "Blogs");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Blogs",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
