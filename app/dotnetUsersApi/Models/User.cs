namespace DotnetAPI.Models
{//modelos deberían ser parciales
    public partial class User
    {
        public int UserId {get; set;}
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string Email {get; set;}
        public string Gender {get; set;}
        public bool Active {get; set;}

        /* 
        
        CREATE TABLE TutorialAppSchema.Users(
        UserId INT IDENTITY(1,1),
        FirstName VARCHAR(100),
        LastName  VARCHAR(100),
        Email VARCHAR(100),
        Gender VARCHAR(12),
        Active INT
)

         */

        /* creamos un constructor para no hacer las propiedades nullables */
        public User()
        {
            if(FirstName == null)
            {
                FirstName = "";
            };
            if(LastName == null)
            {
                LastName = "";
            };
            if(Email == null)
            {
                Email = "";
            };
            if(Gender == null)
            {
                Gender = "";
            };
        }
    }
}