export class NewMember {
  FullName: string;
  JobTitle: string;
  Email: string;
  Bio: string;
  IsMale: boolean;
  ImageFile: File;

  /**
   *
   */
  constructor(
    fullName: string,
    jobTitle: string,
    email: string,
    bio: string,
    isMale: boolean,
    image: File
  ) {
    (this.FullName = fullName),
      (this.JobTitle = jobTitle),
      (this.Email = email),
      (this.Bio = bio),
      (this.IsMale = isMale),
      (this.ImageFile = image);
  }
}
