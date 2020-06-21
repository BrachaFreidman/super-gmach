﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
    [DataContract]
    public  class Management_statusDTO
    {
        static int  cnt=0;
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string Color { get; set; }
        public Management_statusDTO(string name,string color)
        {
            Name = name;
            Color = color;
            Id = cnt;
            cnt++;
        }
        public override string ToString()
        {
            return "Management_status: "+Name;
        }
       
    }
}
