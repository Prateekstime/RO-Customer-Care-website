
import "./Founder.css";
const Founder = () => {
  const founders = [
    {
      name: "Wade Warren",
      title: "CEO & Co-founder",
      image:
        "https://s3-alpha-sig.figma.com/img/10fd/c041/b0395c23dd9e96277653b7b6576ab0eb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LamsYPxcls-3RlQCIRTH5oJxl-3rmLxXahZyZnBpkuFbUbaUlclC~CZeclO2W5eN4tIWnhJKr-E3tKffWscHvU57O~jwunKaKsil4LHUooKcPmZonhyO-02-sfN1RLmLx~WJVaVwOWc5ROiheD~FHvfk8a9JL-WaWh-5QoD9psf6nqrkTwh01VTrqSfRry~O4~49F5guFeBKsVvLKWGsnV5FdJsHRL9krwyw25pybXkTFIr4H1N-53C2pISZ7CfRiHbrU4mtDZRX4kuvzDiuwRjJpR2xU4V4wQeVbBjQWL3z7VzKfTzogwXrPh8UkW2QDYpBj~7Lp4nT2jFh8CrCdA__",
    }, // Add image paths
    {
      name: "Cameron Williamson",
      title: "CTO & Co-founder",
      image:
        "https://s3-alpha-sig.figma.com/img/3170/8284/a6c54c503d5c437cb4fcb4f7f9fffe96?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VMAzuDeVNHffg0Sf22u--8TEy3-WRIDhaZ2JwEeX~7L102OPF4Ek~lXjLeg2-V16JSMf0U4NnWOKflJ9UCIngeA0gYFS-ohK3ejra44D8i0qsdShtjBKyqOC~FANgR6OERAPb3EsUhwswZu3PxpGJPlcnv3CV5AO4eC~Q0Ecg0pawc6MNL5saFYnY55d9OiTe~jczPnYgdIAXOItMF6VM57~9lI7-v~JdJ9dlj6Xl2tz4h9d07D~xheGRr6hSzTZyyIGNG9cxbugiZAa6P2LfR1aY200akJIHPf2R~6q1UG54NJG1gsDd6mPYj~BIkVElW5x7kCQN65YtiAAiAmz6Q__",
    },
    {
      name: "Ronald Richards",
      title: "COO & Co-founder",
      image:
        "https://s3-alpha-sig.figma.com/img/fe4d/a560/6984b93260643b84bdd08e5b0866a6ed?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HtQ7zPUEpxZwBMG1-7GPV4GydaKIori9XzyDFADYp2~Fgaqxd-GsYFQbFsAzA9gMY7LPt9UyJcahlPWBeSyT0cdG-2xdvvUlNZZp3tfQ6P5T3ivHGg4c34zB~Ge7YEOMMpCg~zKcz~6GoTSYORgTsepOJRsjC~K6b36N23nybsBYQ56waPv7IiAKwrxqpqL-DgQsskLug41jyR9JuX24od8YSDv2Stmapc7ulQAOUUWOCCxTgg9wYOJ2BqGtlTiEP7ffNAZGFBV-mCq4oQxrB6MnckESG0jdcY27qV4s63qPz-r~LW99fsR6V3P4dWpJRC0jPZNa8mbKUGFLmnGGDg__",
    },
    {
      name: "Kristin Watson",
      title: "CMO & Co-founder",
      image:
        "https://s3-alpha-sig.figma.com/img/f5c7/4f5e/e5e0322ff118766dc2ec30da31c00e55?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DgbzOCRqH453M5MrfCKcf3g5GyAAbUQ0PliA0xGm8osBoh02FSrqQAdJn3ju5N~mkpBukJ8pNVzqNFT72DlpjqQ7~BdXs2Nxx5Do7ouhqpcMyuWPwJkUP5dJ-zZBoBiTBOkoqmOvZadyfITyn~L2kcs51r9b-45g~GoS1n~55-81YFwfXCwOLOBQNU34jRhzuRBpxjEO3bVCfzR9HAM9cA8uFQDO6E4o5EJJBiWk7u9DKuy6f0Uz6eG8fhPzDbcayyd1T4czhzrd08WjPjkeOClxPxPWV0sLD4htW29~k-aHgXTV6bYkNoe2fqvsD3X6whKVl6PzBoOsY2Out6Nbwg__",
    },
  ];
  return (
    <>
      <div className="founders-container">
        <div>
          <h2>Founders</h2>
        </div>

        <div className="founders-grid">
          {" "}
          {/* Use grid for layout */}
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <img
                src={founder.image}
                alt={founder.name}
                className="founder-image"
              />{" "}
              {/* Add image */}
              <div className="founder-name">{founder.name}</div>
              <div className="founder-title">{founder.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Founder;
