using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Klockor> Klockor { get; set; }
    public DbSet<Design> Design { get; set; }
    public DbSet<GlasOchKeramik> GlasOchKeramik { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Klockor>().ToTable("klockor");
        modelBuilder.Entity<Design>().ToTable("design");
        modelBuilder.Entity<GlasOchKeramik>().ToTable("glasochkeramik");
    }
}