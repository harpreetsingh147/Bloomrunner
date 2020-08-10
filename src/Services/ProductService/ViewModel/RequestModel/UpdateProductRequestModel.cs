using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.ViewModel.RequestModel
{
    public class UpdateProductRequestModel
    {
        public int StudentId { get; set; }
        public int SubjectId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Class { get; set; }
        public string Subject { get; set; }
        public int Marks { get; set; }


    }
}
