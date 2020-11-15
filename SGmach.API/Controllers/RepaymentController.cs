using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BI.BLclasses;
using BL.BLclasses;
using DTO.classes;
//using DTO.classes.user_classes;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SGmach.BL.BLclasses;

namespace API.Controllers {
  [Route ("api/Repayment")]
  [EnableCors ()]

  public class RepaymentControll :ControllerBase
  {
    [HttpPost]
    [Route ("Update")]
      public void Update ([FromBody] RepaymentsDTO repayment) {
      RepaymentBL.Update (repayment);
    }
}
}
