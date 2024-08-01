using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ItemsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ItemsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("klockor")]
    public async Task<ActionResult<IEnumerable<Klockor>>> GetKlockor()
    {
        return await _context.Klockor.ToListAsync();
    }

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