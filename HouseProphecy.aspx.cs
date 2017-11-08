using System;
using System.Web;
using System.Web.UI;
using RentPayment.DataProviders;
using HouseProphecyLib;

namespace HouseProphecy
{
    public partial class HouseProphecy : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                if (IsAjaxRequest(Request))
                {
                    //houseProphecyLib.ConnectionString = DataProvider.Instance.ConnectionString;
                    string str = "";
                    HouseProphecyLib houseProphecyLib = new HouseProphecyLib(JSObjectOperation.Instance.DeserializeJSObject<ForecastJSON>(Request.Form[0]));
                    if (houseProphecyLib.json.Action == "getInfo") //getPrice
                    {
                        str = houseProphecyLib.prediction();
                    }
                    else if (houseProphecyLib.json.Action == "getPrice") //getInfo
                    {
                        str = houseProphecyLib.DataTableToJSON(DataProvider.Instance.GetListInfo(houseProphecyLib.json.State, houseProphecyLib.json.County,
                                              houseProphecyLib.json.City, houseProphecyLib.json.Street, houseProphecyLib.json.StreetNumber, houseProphecyLib.json.ZipCode).Tables[0]);
                    }
                    Response.Write(str);
                    Response.End();
                }
            }
        }

        public bool IsAjaxRequest(HttpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }
            var context = HttpContext.Current;
            var isCallbackRequest = false; // callback requests are ajax requests
            if (context != null && context.CurrentHandler != null && context.CurrentHandler is System.Web.UI.Page)
            {
                isCallbackRequest = ((System.Web.UI.Page)context.CurrentHandler).IsCallback;
            }
            return isCallbackRequest || (request["X-Requested-With"] == "XMLHttpRequest") || (request.Headers["X-Requested-With"] == "XMLHttpRequest");
        }
    }
}