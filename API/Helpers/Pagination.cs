using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class Pagination<T> where T : class
    {
        public Pagination(int pageIndex, int pageSize,int count, IReadOnlyList<T> data)
        {
            PageIndex = pageIndex;
            PageSize = pageSize;
            Count = count;
            Data = data;

        }
        public int PageIndex { get; set; }  //hangi sayfada olduğumuz
        public int PageSize { get; set; }  //sayfadaki toplam kayıt sayısı
        public int Count { get; set; }
        public IReadOnlyList<T> Data { get; set; }


    }
}
