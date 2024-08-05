using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace antikguessrapi.Migrations
{
    /// <inheritdoc />
    public partial class AddAllItemsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Price",
                table: "klockor",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "klockor",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Artist",
                table: "klockor",
                newName: "artist");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "klockor",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "ImgUrl",
                table: "klockor",
                newName: "image_url");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "glasochkeramik",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "glasochkeramik",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Artist",
                table: "glasochkeramik",
                newName: "artist");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "glasochkeramik",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "ImgUrl",
                table: "glasochkeramik",
                newName: "image_url");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "design",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "design",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Artist",
                table: "design",
                newName: "artist");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "design",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "ImgUrl",
                table: "design",
                newName: "image_url");

            migrationBuilder.AlterColumn<int>(
                name: "price",
                table: "klockor",
                type: "integer",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AlterColumn<int>(
                name: "price",
                table: "glasochkeramik",
                type: "integer",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AlterColumn<int>(
                name: "price",
                table: "design",
                type: "integer",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.CreateTable(
                name: "all_items",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Type = table.Column<string>(type: "text", nullable: false),
                    OriginalId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_all_items", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "konst",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    artist = table.Column<string>(type: "text", nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false),
                    image_url = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_konst", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "all_items");

            migrationBuilder.DropTable(
                name: "konst");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "klockor",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "klockor",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "artist",
                table: "klockor",
                newName: "Artist");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "klockor",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "image_url",
                table: "klockor",
                newName: "ImgUrl");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "glasochkeramik",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "glasochkeramik",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "artist",
                table: "glasochkeramik",
                newName: "Artist");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "glasochkeramik",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "image_url",
                table: "glasochkeramik",
                newName: "ImgUrl");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "design",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "design",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "artist",
                table: "design",
                newName: "Artist");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "design",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "image_url",
                table: "design",
                newName: "ImgUrl");

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "klockor",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "glasochkeramik",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "design",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }
    }
}
