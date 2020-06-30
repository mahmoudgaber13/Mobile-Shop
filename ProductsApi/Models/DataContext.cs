using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProductsApi.Models
{
    public class DataContext : IdentityDbContext
    {
        public DataContext() : base("DefaultConnection")
        {
            
        }
                public virtual DbSet<Product> products { get; set; }
    }
}