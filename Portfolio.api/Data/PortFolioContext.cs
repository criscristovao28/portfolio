using Microsoft.EntityFrameworkCore;
using Portfolio.api.Models;

namespace Portfolio.api.Data
{
    public class PortFolioContext: DbContext
    {
        public PortFolioContext(DbContextOptions<PortFolioContext> options)
            :base(options) { }

        public DbSet<Contact> Contacts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfiguration configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder.UseSqlServer(configuration.GetConnectionString("ServerConnection"));
            base.OnConfiguring(optionsBuilder);
        }

    }
}
