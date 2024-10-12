import * as React from "react";
import {
  Row,
  Column,
  Section,
  Html,
  Head,
  Body,
  Tailwind,
  Button,
  Container,
  Text,
  Font,
  Link,
  Img,
} from "@react-email/components";

const Email = ({ name }: { name: string }) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#ED2124",
              secondary: "#5E6470",
              info: "#1A1C21",
              background: "#FEE9EA",
              blue: "#336DFF",
              supportivePrimary: "#DC3545",
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          {/* <Font
            fontFamily="Lexend"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap",
              format: "woff2",
            }}
          /> */}
          <Font
            fontFamily="Lexend"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/lexend/v30/RtKJbxU4oo2bp7zj_qMA.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="">
          <Container className="h-20 w-full bg-background md:w-[600px]">
            <Section>
              <div className="flex items-center justify-center pt-[20px] pb-[18px]">
                <Img
                  src={`https://i.ibb.co.com/4Wnp5dZ/Group-1000003195.png`}
                  alt="Cat"
                  width="180px"
                  height="33px"
                  className="mx-auto"
                />
              </div>
            </Section>
            <Section className="py-[24px] px-[45px]">
              <Section className="px-[37.5px] py-[32px] bg-white">
                <Text className="text-info text-[20px] font-semibold ">
                  Your Secret Password is Here!
                </Text>
                <Text className="text-info text-base mt-[16px] mb-[30px] font-normal capitalize">
                  Hi Akash Gupta
                </Text>
                <Text className="text-secondary text-base font-normal">
                  Your new secret password is ready. For your security, please
                  use the temporary password provided below and reset it once
                  you log in.
                </Text>

                <Text className="text-info text-[20px] font-semibold flex my-6 ">
                  Temporary Password:
                  <span className="text-primary ms-1"> V24GH502336</span>
                </Text>
                <Text className="text-secondary mb-4 text-base font-normal ">
                  To change your password, click on the button below.
                </Text>
                <Button className=" bg-primary mb-4">
                  <div className=" text-white  flex items-center gap-1 text-base font-medium gap-2 px-6 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13172_8299)">
                        <path
                          d="M15.7852 9.36017V3.51583C15.7844 2.8263 15.5101 2.16524 15.0226 1.67767C14.535 1.1901 13.8739 0.91583 13.1844 0.915039H2.60079C1.91126 0.915821 1.25019 1.19008 0.762617 1.67766C0.275043 2.16523 0.000781615 2.8263 0 3.51583L0 12.2962C0.000781632 12.9857 0.275045 13.6468 0.762619 14.1343C1.25019 14.6219 1.91126 14.8962 2.60079 14.8969H10.2896C10.5884 15.4656 11.0169 15.9559 11.5405 16.3281C12.064 16.7003 12.6679 16.9439 13.3032 17.0393C13.9384 17.1346 14.5872 17.0789 15.197 16.8768C15.8067 16.6747 16.3603 16.3318 16.8128 15.8759C17.2654 15.4199 17.6041 14.8638 17.8017 14.2526C17.9992 13.6413 18.05 12.9922 17.95 12.3576C17.8499 11.7231 17.6017 11.121 17.2256 10.6003C16.8495 10.0795 16.356 9.65468 15.7852 9.36017ZM13.1842 2.04004C13.3916 2.03992 13.5965 2.08377 13.7857 2.16871L7.89258 7.16832L1.99927 2.16871C2.18842 2.08377 2.39344 2.03992 2.60079 2.04004H13.1842ZM2.60079 13.7719C2.20953 13.7715 1.83441 13.6159 1.55774 13.3392C1.28108 13.0625 1.12545 12.6874 1.125 12.2962V3.51583C1.12493 3.33466 1.1584 3.15504 1.22372 2.98606L7.52857 8.33494C7.63021 8.42116 7.75916 8.46848 7.89244 8.46848C8.02572 8.46848 8.15467 8.42116 8.2563 8.33494L14.5613 2.98606C14.6266 3.15504 14.6602 3.33465 14.6602 3.51583V8.97345C14.0047 8.85127 13.3293 8.89115 12.6928 9.08962C12.0563 9.28809 11.4779 9.63913 11.008 10.1122C10.5382 10.5852 10.191 11.166 9.99687 11.8038C9.8027 12.4417 9.76739 13.1173 9.89399 13.7719H2.60079ZM13.9097 15.9599C13.3232 15.9599 12.7499 15.786 12.2622 15.4601C11.7746 15.1343 11.3945 14.6712 11.1701 14.1293C10.9456 13.5875 10.8869 12.9913 11.0013 12.416C11.1157 11.8408 11.3982 11.3125 11.8129 10.8977C12.2276 10.483 12.756 10.2006 13.3312 10.0862C13.9064 9.97179 14.5026 10.0305 15.0445 10.2549C15.5863 10.4794 16.0494 10.8595 16.3753 11.3471C16.7011 11.8348 16.875 12.4081 16.875 12.9946C16.8741 13.7807 16.5614 14.5345 16.0055 15.0904C15.4496 15.6463 14.6959 15.959 13.9097 15.9599ZM15.8968 12.381L13.874 14.4038C13.7685 14.5093 13.6254 14.5685 13.4762 14.5685C13.327 14.5685 13.184 14.5093 13.0785 14.4038L11.9226 13.2479C11.8703 13.1957 11.8289 13.1336 11.8006 13.0654C11.7723 12.9972 11.7578 12.924 11.7578 12.8501C11.7578 12.7763 11.7723 12.7031 11.8006 12.6349C11.8289 12.5666 11.8703 12.5046 11.9225 12.4524C11.9748 12.4001 12.0368 12.3587 12.105 12.3304C12.1733 12.3021 12.2464 12.2876 12.3203 12.2876C12.3941 12.2876 12.4673 12.3021 12.5355 12.3304C12.6038 12.3586 12.6658 12.4001 12.7181 12.4523L13.4762 13.2105L15.1013 11.5854C15.207 11.481 15.3497 11.4226 15.4983 11.423C15.6469 11.4235 15.7893 11.4827 15.8944 11.5878C15.9994 11.6929 16.0587 11.8352 16.0591 11.9838C16.0596 12.1324 16.0012 12.2752 15.8968 12.3809V12.381Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13172_8299">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="block text-[16px] -mt-1">
                      Reset password
                    </span>
                  </div>
                </Button>
                <Text className="text-secondary mb-2 text-base font-normal ">
                  Best regards
                </Text>
                <Text className="text-secondary mb text-base font-normal ">
                  Visions Transport Enterprise Sdn Bhd
                  <br />
                  <span className="!text-secondary">
                    www.vizfleettransport.com
                  </span>
                </Text>
              </Section>
            </Section>
            <div
              // className="py-[26px] flex  justify-center  items-center flex-col "
              style={footerContainer}
            >
              <div style={imageMakeCenter}>
                <Img
                  src={`https://i.ibb.co.com/X8DkGbG/Vector.png`}
                  alt="Cat"
                  // width="180px"
                  // height="33px"
                  className="block"
                />
                <Img
                  src={`https://i.ibb.co.com/2cGmJf1/Facebook.png`}
                  alt="Cat"
                  style={{
                    marginLeft: "32px",
                  }}
                />
                <Img
                  src={`https://i.ibb.co.com/F3jRK9z/Instagram.png`}
                  alt="Cat"
                  style={{
                    marginLeft: "32px",
                  }}
                />
              </div>
              <div style={flexColumnCenter}>
                <Link
                  href="www.visionstransport.com"
                  className="text-supportivePrimary  mx-auto underline border-b border-supportivePrimary text-sm mb-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  www.visionstransport.com
                </Link>
              </div>
              <div style={flexColumnCenter}>
                <Img
                  src={`https://i.ibb.co.com/4Wnp5dZ/Group-1000003195.png`}
                  alt="Cat"
                  width="180px"
                  height="33px"
                  className="block mx-auto"
                />
              </div>
            </div>
            <Section className="h-[14px] bg-primary w-full"></Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Email;

// https://i.ibb.co.com/PGMTZm8/email-1.png
// https://i.ibb.co.com/2cGmJf1/Facebook.png
// https://i.ibb.co.com/4Wnp5dZ/Group-1000003195.png
// https://i.ibb.co.com/F3jRK9z/Instagram.png
// https://i.ibb.co.com/X8DkGbG/Vector.png

const imageMakeCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
  margin: "0px auto",
  marginBottom: "16px",
  width: "135px",
};

const flexColumnCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const footerContainer = {
  // display: "flex", // Valid CSS property
  // flexDirection: "column", // Specific valid value for flexDirection
  // justifyContent: "center", // Valid CSS property
  // alignItems: "center", // Valid CSS property
  padding: "20px", // Valid CSS property
  background: "#fff", // Valid CSS property
};
