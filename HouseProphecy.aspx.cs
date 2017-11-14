using System;
using System.Web;
using System.Web.UI;
using System.Configuration;
using static WebForecast.Components.Constants;
using HouseProphecy.Components;

namespace HouseProphecy
{
    public partial class HouseProphecy : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            HouseProphecyLib houseProphecyLib = new HouseProphecyLib(JSObjectOperation.Instance.DeserializeJSObject<ForecastObject>(Request.Form[0]));
            if (!IsPostBack)
            {
                if (IsAjaxRequest(Request))
                {
                    //houseProphecyLib.ConnectionString = DataProvider.Instance.ConnectionString;
                    string str = "";
                  
                    if (houseProphecyLib.Json.Action == "getPrice")
                    {
                        str = houseProphecyLib.Prediction();
                    }
                    else if (houseProphecyLib.Json.Action == "getInfo")
                    {
                        houseProphecyLib.SetConnectionString(ConnectionString());
                        str = houseProphecyLib.GetPropertyInfoList();
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

        #region private methods
        /// <summary>
        /// returns default connectionString
        /// </summary>
        private string ConnectionString()
        {   
               
            string connectionStringName = ConnectionNames.ForecastAzureConnection;
            foreach(ConnectionStringSettings connectionStringSettings in ConfigurationManager.ConnectionStrings)
            {
                if(string.Equals(connectionStringSettings.Name, connectionStringName))
                {
                    return connectionStringSettings.ConnectionString;
                }
            }
            return string.Empty;              
            
        }
        #endregion
    }
}