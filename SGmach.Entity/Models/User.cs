//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SGmach.Entity.Models
{
    using System;
    using System.Collections.Generic;

    public class User
    {
        public int UserId { get; set; }
        public string firstName { get; set; }
        public string lastname { get; set; }
        public string father_name { get; set; }
        public bool VIP { get; set; }
        public bool frirnd { get; set; }
        public string phon1 { get; set; }
        public string phon2 { get; set; }
        public string email_addres { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public int num_street { get; set; }
        public int collection_date { get; set; }
        public string remarks { get; set; }
        public DateTime joining_date { get; set; }
        public Nullable<int> Manager_permissions { get; set; }
        public int Scoring { get; set; }
        public string GmachId { get; set; }="shavet hchim";
        public string MaritalStatus { get; set; }
        public string Status_reason { get; set; }
        public BankDetails BankDetails { get; set; }=new BankDetails();
        public Credit Credit { get; set; }=new Credit();
        public  string NameManagement_status { get; set; }
        public Management_status management_Status { get; set; }
    
        public string NameStatus { get; set; }
        public Status status { get; set; }

         public List<User_in_fund> users_In_Funds { get; }=new List<User_in_fund>();
          public List<Loan> Loans { get;}=new List<Loan>();
          public List<Collection> Collections { get; }=new List<Collection>();
    }
}
