using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EdgeJsServerNet462
{
    public class SimpleClass
    {
        public string SimpleInstanceMethod(string value)
        {
            return $"Woww.. what a value: {value}";
        }

        public static string SimpleStaticMethod(string value)
        {
            return $"Woww.. what a static alue {value}";
        }

        public async Task<object> Invoke(object input)
        {
            var v = (string)input;
            return SimpleInstanceMethod(v);
        }
    }
}
