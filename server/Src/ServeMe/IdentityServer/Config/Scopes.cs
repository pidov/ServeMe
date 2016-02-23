using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace IdentityServer.Config
{
    public static class Scopes
    {
        public static IEnumerable<Scope> Get()
        {
            return new List<Scope>
            {
                new Scope
                {
                    Name = "testscope",
                    DisplayName = "Test Scope",
                    Description = "Test Scope",
                    Type = ScopeType.Resource
                }
            };
        }
    }
}