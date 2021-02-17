using Microsoft.EntityFrameworkCore;
using Portfolio.API.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.API.Persistence
{
    public class AppDbContext : DbContext
    {
        public DbSet<Email> Emails { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Email>().ToTable("Email");
            builder.Entity<Email>().HasKey(p => p.Id);
            builder.Entity<Email>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Email>().Property(p => p.ReturnAddress).IsRequired().HasMaxLength(30);
            builder.Entity<Email>().Property(p => p.EmailBody).IsRequired().HasMaxLength(2000);

            builder.Entity<Email>().HasData
            (
                new Email
                {
                    Id = "1",
                    ReturnAddress = "there@here.com",
                    EmailBody = "This is an email to tell you that you are neat!"
                }
            );
        }
    }
}
