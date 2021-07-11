export const DivisionList = () => {
  return [
    { label: "Barisal", value: "Barisal" },
    { label: "Chittagong", value: "Chittagong" },
    { label: "Dhaka", value: "Dhaka" },
    { label: "Khulna", value: "Khulna" },
    { label: "Mymensingh", value: "Mymensingh" },
    { label: "Rajshahi", value: "Rajshahi" },
    { label: "Rangpur", value: "Rangpur" },
    { label: "Sylhet", value: "Sylhet" },
  ];
};
export const DistrictListByDivision = (data) => {
  if (data) {
    switch (data) {
      case "Barisal":
        return [
          { label: "Barisal", value: "Barisal" },
          { label: "Barguna", value: "Barguna" },
          { label: "Bhola", value: "Bhola" },
          { label: "Jhalokati", value: "Jhalokati" },
          { label: "Patuakhali", value: "Patuakhali" },
          { label: "Pirojpur", value: "Pirojpur" },
        ];
      case "Chittagong":
        return [
          { label: "Bandarban", value: "Bandarban" },
          { label: "Brahmanbaria", value: "Brahmanbaria" },
          { label: "Chandpur", value: "Chandpur" },
          { label: "Chittagong", value: "Chittagong" },
          { label: "Comilla", value: "Comilla" },
          { label: "Cox's Bazar", value: "Cox's Bazar" },
          { label: "Feni", value: "Feni" },
          { label: "Khagrachhari", value: "Khagrachhari" },
          { label: "Lakshmipur", value: "Lakshmipur" },
          { label: "Noakhali", value: "Noakhali" },
          { label: "Rangamati", value: "Rangamati" },
        ];
      case "Dhaka":
        return [
          { label: "Dhaka", value: "Dhaka" },
          { label: "Faridpur", value: "Faridpur" },
          { label: "Gazipur", value: "Gazipur" },
          { label: "Gopalganj", value: "Gopalganj" },
          { label: "Kishoreganj", value: "Kishoreganj" },
          { label: "Madaripur", value: "Madaripur" },
          { label: "Manikganj", value: "Manikganj" },
          { label: "Narayanganj", value: "Narayanganj" },
          { label: "Narsingdi", value: "Narsingdi" },
          { label: "Rajbari", value: "Rajbari" },
          { label: "Shariatpur", value: "Shariatpur" },
          { label: "Tangail", value: "Tangail" },
        ];
      case "Khulna":
        return [
          { label: "Bagerhat", value: "Bagerhat" },
          { label: "Chuadanga", value: "Chuadanga" },
          { label: "Jessore", value: "Jessore" },
          { label: "Jhenaidah", value: "Jhenaidah" },
          { label: "Khulna", value: "Khulna" },
          { label: "Kushtia", value: "Kushtia" },
          { label: "Magura", value: "Magura" },
          { label: "Meherpur", value: "Meherpur" },
          { label: "Narail", value: "Narail" },
          { label: "Satkhira", value: "Satkhira" },
        ];
      case "Mymensingh":
        return [
          { label: "Jamalpur", value: "Jamalpur" },
          { label: "Mymensingh", value: "Mymensingh" },
          { label: "Netrokona", value: "Netrokona" },
          { label: "Sherpur", value: "Sherpur" },
        ];
      case "Rajshahi":
        return [
          { label: "Bogra", value: "Bogra" },
          { label: "Joypurhat", value: "Joypurhat" },
          { label: "Naogaon", value: "Naogaon" },
          { label: "Natore", value: "Natore" },
          { label: "Nawabganj", value: "Nawabganj" },
          { label: "Pabna", value: "Pabna" },
          { label: "Rajshahi", value: "Rajshahi" },
        ];
      case "Rangpur":
        return [
          { label: "Dinajpur", value: "Dinajpur" },
          { label: "Gaibandha", value: "Gaibandha" },
          { label: "Kurigram", value: "Kurigram" },
          { label: "Lalmonirhat", value: "Lalmonirhat" },
          { label: "Nilphamari", value: "Nilphamari" },
          { label: "Panchagarh", value: "Panchagarh" },
          { label: "Rangpur", value: "Rangpur" },
          { label: "Thakurgaon", value: "Thakurgaon" },
        ];
      case "Sylhet":
        return [
          { label: "Habiganj", value: "Habiganj" },
          { label: "Maulvibazar", value: "Maulvibazar" },
          { label: "Sunamganj", value: "Sunamganj" },
          { label: "Sylhet", value: "Sylhet" },
        ];
      default:
        break;
    }
  }
};
