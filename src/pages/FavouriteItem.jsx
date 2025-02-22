

const FavouriteItems = () => {
  const favItemsList = [
    {
      id: 1,
      img: "https://s3-alpha-sig.figma.com/img/0c10/908d/15a94bc9460032ba3ac1611106fcc85d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KGTdYfMJmyMxE0gzT5CBukD74YxNsuEO34ebJ9E08dyKED0pZza5BbvpDC~wo5D3zLHSUA5vXMl4lLhXjUWgBR2zm4nUoT1xo5QnZSOoDsIVSGQooTIpMyPZHYHlzmoeDEh250gLCAgAQWh7YXwBnp9-r2YsG4sCxR2gxPnximJaU2fNjpeOD-UnLu7EDXR7RUxuKK1AcZb6Djv5sU8McW7ZhH9SJbLEX4tqPMiiX21fe52oFq73ZzRxhGFQqU2saz1Tbnoa9Qeiddfz-Uv2b3RI5N3dHVm5rUMmTF5-5cIE-LA0VI-mrQ4zKurAWezIQFnS4kk6d2cja5SeqaNT~g__",
    },
    {
      id: 2,
      img: "https://s3-alpha-sig.figma.com/img/f34a/553a/caeefa7e09c3b1946728421a65c5a7ca?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7riDM06OQdsx0BmekgDw-wGQQV51dDRFavmiH655Cc1ZPcafTir~0RDGoHAaOkpbMxiUMso~6yOJ1--0-EeLkmra-B3QzXPS8mv0VnO-3V6LDuP-Rv3PseGOTVPU0ShsEuwD3NCvVNvMibuxEDS1P54s8rdR26WU5E4UZvUq-YhBJBfcb2VdI3C5vH4ojkvpqDml12HW3yHL4L9AXZdvov-YvntD9pwCp0auXsqH5C2p04R4LMQvQ1nflyP2krKu6WKYcQwpuFiiW-Y7zjg52kb8WYeN49IXsHc3UhgEPMSA0YNQgfcMsqUUTvPoPkhJW22O1WKA~1QQADPQUIEjg__",
    },
    {
      id: 3,
      img: "https://s3-alpha-sig.figma.com/img/862f/35de/fcf1679cd263cad761821c9773d6dc10?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=doGhzkZ8Zk5kCsTF62M1GbVkd83cpGBC8FJR3gA5Zz5l7jiahjt8Uqy4zGy3um3fh3kUtXI6FxWAhpqPrQ3GEFRTxoF7u1~tk7suLj9mZWinBLyktMqMbaqSau6bIQefSjV8IOGE0Dl3ItZ93T58LUm~Eyi4RjeOhmXrrhYQZU8p8ecqxio4A5DKrm4ifxSJKi6aJs0m~UFAZyBHAmk-pvSxeGUim8tSSD-hh0lH8CqgQUGqM45-s1RfJ4nUV9SvT7xWSEES7ut86PzqEK1kGpSFMkyWJRVlfdvzBAgA4VHxN6~0xat7X6WYJm9z3nnI3w-O7XkvQiuzgvW2fR51TA__",
    },
    {
      id: 4,
      img: "https://s3-alpha-sig.figma.com/img/2045/4517/ecc17d6de217af78239ec6fe05f670f8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EMmjs508LMU6BaoGG9rqvvnsCM-GTC89CJZOM9SKUJQy8me7gbSMMc~zCYIOY2Lu2gzJmsiI9AqyANmGw-AU75LyRdN8uYDBG8yXUOpbQkM3SffBxwFOc2AvJNhDTTyHCGc5pLuqxr7uwvyMLjwJrdqSjgpWlVRarIN6BtgsjnNcxlmRPKoflBLcGKIkeZiOVUs8Ub8DVltIj-HWgcynKTJmEr4JzfvZKMd82zIOFZGt4CtIVJdmNz7MyBd0yVyAXiGq8rFqjVcNAfrjYpToxB8SOJY6ByhpCMfuertIrJqN76e0sfQvpU6xVCkGdoT4VdEXAUNvTiFElnBA3j9GFg__",
    },
    {
      id: 5,
      img: "https://s3-alpha-sig.figma.com/img/9f1e/f23b/e96ecb2c0926df5d1dfd9481af107144?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ytk0C-xSLOQFe7y7EwVFXNPu01SjNznJpkMzTCmQdmzHOE5SGg712G53w8T3fCikU6aoLV4Rkz84LzizvQ0kRKwjJoc0FoVGv1gPeHghgMBkWm-qjLtJtWcMN64CNoncTSYn1~6fp7x0SUl7xtz3bkbVEgbnyfZPaVdb1XsOZ5cLUwu0XnFsKfP0sAFp8KVmzMdVZ4u8ooCFJGhgovYuGFYrX~OchQ5UpxwU9nnKEva5ALzL3-Wk0-SBtr6DWpnoOgGjD7EiV9jAYHYjoyh~zNJX0XZ0EHEadp7t7J9zP9AUCOYaD1JLV5o2D7yHdXpkbF3-Z48vV-WeRo~3H-Vldg__",
    },
    {
      id: 6,
      img: "https://s3-alpha-sig.figma.com/img/a637/d9a4/937ad742b3c667e6c8bfbb4a56de1272?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a~LjUJznolBt8jIENIJ0Lcw3alxsC9xZYFl1a7pE-BeOlGZGYC4Y0OuTuA8~1~IUit7680-dfgrUIpOzp-34mnmrvl9B5CyvNOz1gxzInZcFZFUuoAAF6O6ob2jzDhx9tqnLtMPr5UUByRpiownN5C0XwsuvdaLz3-yJwZ47cjNv5HglSHXItBQjm0j97yiHFrA~R~zHxsqtD8oFaK33XEzmM08tMc9QusA5~sYQWTvohLsNMiQEqZh21p2JC1Z9EAJ6MdBuCNpdHafhengjcKADVCLEqOaQD~NBe4GkLvytWm5pqEk9DT0ZgKjGOKveBkjGFTcrR7U2i0Jtdc5MMg__",
    },
    {
      id: 7,
      img: "https://s3-alpha-sig.figma.com/img/c087/e407/8ea74d4441b19c36b3f72eaa3c88f3f8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ra74DkcBvAGlQvpWpJPcvzl-cUrK~uQXQjDLE0bnIS3ALOwUndGtvsQRbFFp68GGFWH~pRN-FwG~IC9QPOrF1-JQVORRuIUcl~YwK~AX~EDrP8XnrcitBRKTfm~T1ux2-6lJuRkvenuP64qEhOzq7XQ1sxkD5genASJEE4pzG8bJWJtON2V6pfxQyGiio919wlA1hT~rJaRdsGR5MEms3PyspNg8H4JaqHOVUVhsayTQbS3xAn4cZD-DRTwzzf84qVRnbdtkRctKNXi7Eq7k17-koDuqikyiGvJ0UV8AAkHniXz8ZJdnXbtRHFEJhrganp9djMDJ4Zp0mYCsC~ISlA__",
    },
    {
      id: 8,
      img: "https://s3-alpha-sig.figma.com/img/6534/984b/3ca0a7804089427958d4b279dd1183da?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28z5XiI~6iTDW0Vu-VDP4JI9aM1hZgAicSCLAVjpRnHJMmOwKUKDx-0iu-DYQBXrAv5BizAA1~IV4lDB2EqJyuV3yAxrrOnC~wd~esmfGBzi5ZIROrZs5XztDUg0W6zFR3tyC14ueXDnHHgAusiiFtTxMIv9L55toOE4zne-0Ph9tHzYdjb~KX0z~CrN~-FavAXS6Je0m6tqUmk76jr8wGLhncDAe9lk-dv3JhiEManOMh1j14FCxmyeVUtrhV5168VElKtCHNwGNr2qBg~28WMGOaK8JlpBSxgsrpZQIQNZI4n7s0SSBCfM~on5Iv-RqQH3Rs7cuUumf1H02ekfw__",
    },
  ];
  return (
    <div className="md:mx-25 md:my-10">
      {/* Heading */}
      <div>
        <h1 className="text-[30px] font-semibold text-[#263138]">
          Your Favorite Items
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 space-y-3">
        {favItemsList.map((items) => (
          <div
            key={items.id}
            className="relative flex flex-col md:w-[257px] md:h-[367px] border border-[#CACACA] rounded-2xl md:mt-7 items-center "
          >
            <img
              alt="spareParts"
              className="md:w-[160px] md:h-[160px] rounded-lg border border-[#CACACA] md:mt-5 "
              src={items.img}
            />

            {/* Content */}
            <div className="flex flex-col p-6 space-y-0.5">
              <p className="text-[16px] text-center font-semibold ">
                Whole house filter with two replacement filters
              </p>
              <p className="flex items-center gap-2 ml-2">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99935 0.667969L11.5743 5.88464L17.3327 6.7263L13.166 10.7846L14.1493 16.518L8.99935 13.8096L3.84935 16.518L4.83268 10.7846L0.666016 6.7263L6.42435 5.88464L8.99935 0.667969Z"
                    fill="#7EC1B1"
                  />
                </svg>{" "}
                4.96 (2.3M Reviews)
              </p>
              <p className="flex gap-2 text-sm items-center">
                <span className="font-semibold">₹299.00</span>{" "}
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#263138" />
                </svg>{" "}
                Warranty: 6 Months
              </p>
              <button className="mx-6 my-2  bg-[#7EC1B1] text-white rounded-lg py-2 w-[125px]">
                Buy Now
              </button>
            </div>
            {/* Heart  */}
            <p className="absolute z-10 top-2 right-2 cursor-pointer border border-[#C17E7F] rounded-full px-1 py-1.5 shadow-[0px_2px_2px_#C17E7F]">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7579 1.41452C17.3097 0.966073 16.7775 0.610337 16.1917 0.367629C15.606 0.124922 14.9781 0 14.3441 0C13.71 0 13.0822 0.124922 12.4965 0.367629C11.9107 0.610337 11.3785 0.966073 10.9303 1.41452L10 2.34476L9.06979 1.41452C8.16439 0.509117 6.93641 0.0004693 5.65598 0.000469309C4.37555 0.000469319 3.14757 0.509117 2.24217 1.41452C1.33677 2.31992 0.828125 3.5479 0.828125 4.82833C0.828125 6.10875 1.33677 7.33674 2.24217 8.24214L3.17241 9.17238L10 16L16.8277 9.17238L17.7579 8.24214C18.2063 7.79391 18.5621 7.26171 18.8048 6.67596C19.0475 6.0902 19.1724 5.46237 19.1724 4.82833C19.1724 4.19428 19.0475 3.56645 18.8048 2.9807C18.5621 2.39494 18.2063 1.86275 17.7579 1.41452Z"
                  fill="#C17E7F"
                />
              </svg>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteItems;
