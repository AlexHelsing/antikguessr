using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ItemsController : ControllerBase
{
    private readonly AppDbContext _context;

    // For creating random number
    static Random random = new Random();

    public ItemsController(AppDbContext context)
    {
        _context = context;
    }

    // For getting all the watches
    [HttpGet("klockor")]
    public async Task<ActionResult<IEnumerable<Klockor>>> GetKlockor()
    {
        return await _context.Klockor.ToListAsync();
    }

    // For getting specific watch by id
    [HttpGet("klockor/{id}")]
    public async Task<ActionResult<Klockor>> GetKlockor(int id)
    {
        var klockor = await _context.Klockor.FindAsync(id);

        if (klockor == null)
        {
            return NotFound();
        }
        return klockor;
    }

    // Returns a random watch
    [HttpGet("klockor/random")]
    public async Task<ActionResult<Klockor>> GetRandomKlocka()
    {
        int count = await _context.Klockor.CountAsync();
        if (count == 0)
        {
            return NotFound("No watches found in the database.");
        }

        int randomIndex = random.Next(0, count);

        var randomKlocka = await _context.Klockor
            .Skip(randomIndex)
            .FirstOrDefaultAsync();

        if (randomKlocka == null)
        {
            return NotFound("Failed to retrieve a random watch.");
        }

        return randomKlocka;
    }
// Similar endpoints for Design and GlasOchKeramik

    [HttpGet("design")]
    public async Task<ActionResult<IEnumerable<Design>>> GetDesign()
    {
        return await _context.Design.ToListAsync();
    }

    [HttpGet("glasochkeramik")]
    public async Task<ActionResult<IEnumerable<GlasOchKeramik>>> GetGlasOchKeramik()
    {
        return await _context.GlasOchKeramik.ToListAsync();
    }

    [HttpGet("test")]
    public IActionResult Test()
    {
        return Ok("Test successful");
    }

    // Add more specific endpoints as needed
}