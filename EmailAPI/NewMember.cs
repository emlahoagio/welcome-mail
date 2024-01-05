namespace EmailAPI
{
    public class NewMember
    {
        public string FullName { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Bio { get; set; } = string.Empty;
        public string MyProperty { get; set; } = string.Empty;
        public FormFile? Image { get; set; }
    }
}

