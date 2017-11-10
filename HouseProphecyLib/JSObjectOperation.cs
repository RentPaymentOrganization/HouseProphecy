
using System.Web.Script.Serialization;

namespace HouseProphecy.Helpers
{
    public class JSObjectOperation : SingleTone<JSObjectOperation>
    {
        private static JavaScriptSerializer serializer = new JavaScriptSerializer();

        public T DeserializeJSObject<T>(string jsObj)
        {
            return serializer.Deserialize<T>(jsObj);
        }

        public string SerializeJSObject(object obj)
        {
            return serializer.Serialize(obj);
        }
    }
}