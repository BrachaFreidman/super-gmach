//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal1
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            this.User_in_fund = new HashSet<User_in_fund>();
        }
    
        public int id { get; set; }
        public Nullable<int> bank { get; set; }
        public int id_user { get; set; }
        public string firstName { get; set; }
        public string lastname { get; set; }
        public Nullable<bool> VIP { get; set; }
        public Nullable<bool> frirnd { get; set; }
        public Nullable<int> status_User { get; set; }
        public Nullable<int> Management_status { get; set; }
        public string phon1 { get; set; }
        public string phon2 { get; set; }
        public string email_addres { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public int num_street { get; set; }
        public string bankName { get; set; }
        public string brunchName { get; set; }
        public int account_number { get; set; }
        public int ciling { get; set; }
        public int collection_date { get; set; }
        public string remarks { get; set; }
        public Nullable<System.DateTime> joining_date { get; set; }
        public Nullable<int> Manager_permissions { get; set; }
        public Nullable<int> Scoring { get; set; }
        public string father_name { get; set; }
        public string Status_reason { get; set; }
    
        public virtual Management_status Management_status1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<User_in_fund> User_in_fund { get; set; }
    }
}