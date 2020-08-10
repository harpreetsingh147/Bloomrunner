using Dapper;
using Microsoft.AspNetCore.Components.RenderTree;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ProductService.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.Repositories.Dapper
{
    public class BaseRepository
    {
        public IOptions<AppConnection> _setting = null;
        public BaseRepository(IOptions<AppConnection> settings)
        {
            this._setting = settings;
        }
        private IDbConnection CreateConnection()
        {
            var cn = "Data Source=DITSDEVPC1;initial catalog=ProductManagement;Integrated Security=True";
            var connection = new SqlConnection(cn);
            return connection;
        }
        /// <summary>
        /// Generic Method for Select Operation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="sql"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        protected async Task<IEnumerable<T>> Query<T>(string sql, object parameters = null)
        {
            using (var connection = CreateConnection())
            {
                var QueryResponse = await connection.QueryAsync<T>(sql: sql, param: parameters, commandType: CommandType.StoredProcedure);
                return QueryResponse;
            }
        }
        /// <summary>
        ///  Generic Methods for Insert,Update and Delete Operation
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="sql"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        protected async Task<int> Command<T>(string sql, object parameters = null)
        {
            using (var connection = CreateConnection())
            {
                var QueryResponse = await connection.ExecuteAsync(sql: sql, param: parameters, commandType: CommandType.StoredProcedure);

                return QueryResponse;
            }
        }
    }
}
