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

        // For getting specific watch by id
    [HttpGet("design/{id}")]
    public async Task<ActionResult<Design>> GetDesign(int id)
    {
        var design = await _context.Design.FindAsync(id);

        if (design == null)
        {
            return NotFound();
        }
        return design;
    }

    // Returns a random watch
    [HttpGet("design/random")]
    public async Task<ActionResult<Design>> GetRandomDesign()
    {
        int count = await _context.Design.CountAsync();
        if (count == 0)
        {
            return NotFound("No designers found in the database.");
        }

        int randomIndex = random.Next(0, count);

        var randomDesign = await _context.Design
            .Skip(randomIndex)
            .FirstOrDefaultAsync();

        if (randomDesign == null)
        {
            return NotFound("Failed to retrieve a random designer.");
        }

        return randomDesign;
    }
    

    [HttpGet("glasochkeramik")]
    public async Task<ActionResult<IEnumerable<GlasOchKeramik>>> GetGlasOchKeramik()
    {
        return await _context.GlasOchKeramik.ToListAsync();
    }

            // For getting specific glas or keramik by id
    [HttpGet("glasochkeramik/{id}")]
    public async Task<ActionResult<GlasOchKeramik>> GetGlasOchKeramik(int id)
    {
        var glasochkeramik = await _context.GlasOchKeramik.FindAsync(id);

        if (glasochkeramik == null)
        {
            return NotFound();
        }
        return glasochkeramik;
    }

    // Returns a random glas och keramik
    [HttpGet("glasochkeramik/random")]
    public async Task<ActionResult<GlasOchKeramik>> GetRandomGlasOchKeramik()
    {
        int count = await _context.GlasOchKeramik.CountAsync();
        if (count == 0)
        {
            return NotFound("No Glas och Keramik found in the database.");
        }

        int randomIndex = random.Next(0, count);

        var randomGlasOchKeramik = await _context.GlasOchKeramik
            .Skip(randomIndex)
            .FirstOrDefaultAsync();

        if (randomGlasOchKeramik == null)
        {
            return NotFound("Failed to retrieve a random glas och keramik.");
        }

        return randomGlasOchKeramik;
    }

        [HttpGet("konst")]
    public async Task<ActionResult<IEnumerable<Konst>>> GetKonst()
    {
        return await _context.Konst.ToListAsync();
    }

            // For getting specific glas or keramik by id
    [HttpGet("konst/{id}")]
    public async Task<ActionResult<Konst>> GetKonst(int id)
    {
        var konst = await _context.Konst.FindAsync(id);

        if (konst == null)
        {
            return NotFound();
        }
        return konst;
    }

    // Returns a random glas och keramik
    [HttpGet("konst/random")]
    public async Task<ActionResult<Konst>> GetRandomKonst()
    {
        int count = await _context.Konst.CountAsync();
        if (count == 0)
        {
            return NotFound("No konst found in the database.");
        }

        int randomIndex = random.Next(0, count);

        var randomKonst = await _context.Konst
            .Skip(randomIndex)
            .FirstOrDefaultAsync();

        if (randomKonst == null)
        {
            return NotFound("Failed to retrieve a random glas och keramik.");
        }

        return randomKonst;
    }

    [HttpGet("test")]
    public IActionResult Test()
    {
        return Ok("Test successful");
    }

    // Add more specific endpoints as needed
}