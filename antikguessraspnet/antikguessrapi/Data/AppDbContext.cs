using Microsoft.EntityFrameworkCore;


public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Klockor> Klockor { get; set; }
    public DbSet<Design> Design { get; set; }
    public DbSet<GlasOchKeramik> GlasOchKeramik { get; set; }
    public DbSet<Konst> Konst { get; set; }
    // Used for bytt är bytt game where items are mixed
    public DbSet<GenericItem> GenericItem { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Klockor>().ToTable("klockor");
        modelBuilder.Entity<Design>().ToTable("design");
        modelBuilder.Entity<GlasOchKeramik>().ToTable("glasochkeramik");
        modelBuilder.Entity<Konst>().ToTable("konst");
        modelBuilder.Entity<GenericItem>().ToTable("all_items");
    }


    
}