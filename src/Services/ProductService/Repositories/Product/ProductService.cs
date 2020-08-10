using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using ProductService.Models;
using ProductService.Repositories.Dapper;
using ProductService.ViewModel.RequestModel;
using ProductService.ViewModel.ResponseModel;

namespace ProductService.Repositories
{
    public class ProductService : BaseRepository, IProductRepository
    {
        public ProductService(IOptions<AppConnection> settings) : base(settings) { }
        public async Task<int> Add(AddProductRequestModel model)
        {
            try
            {
                var response = await Command<int>("AddStudent", model);
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> Delete(int Id)
        {
            try
            {
                var response = await Command<int>("DeleteStudent", new { StudentId = Id });
                return response;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        /// <summary>
        ///  
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        public async Task<IEnumerable<ProductModel>> Get(ProductRequestModel student)
        {
            try
            {
                student.SearchColumn = string.IsNullOrEmpty(student.SearchColumn) ? "" : student.SearchColumn;
                student.SearchValue = string.IsNullOrEmpty(student.SearchValue) ? "" : student.SearchValue;
                return await Query<ProductModel>("StudentMarkSheet", student);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<int> Update(UpdateProductRequestModel model)
        {
            try
            {
                return await Command<int>("UpdateStudent", model);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}