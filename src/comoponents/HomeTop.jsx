import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Stack,
  Flex,
  Spacer,
  Grid,
  Center,
  GridItem,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import styles from "./homeTop.module.css";

const property = {
  imageUrl:
    "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/ODLR_Big_DSK_2x_20221028110114.jpg?imwidth=1180&imdensity=2",
  imageAlt: "women_page_top",
};

const match = [
  {
    title: "Jacquemus",
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x__20221107113403.jpg",
  },
  {
    title: "Gabriela Hearst",
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_2_20221107113403.jpg",
  },
  {
    title: "Isabel Marant",
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_3_20221107113404.jpg",
  },
  {
    title: "Loewe",
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_FE_642x642_2x_4_20221107113403.jpg",
  },
];

export default function HomeTop() {
  // <Image src={property.imageUrl} alt={property.imageAlt} />

  // <Box className={styles.text} border="2px solid red">
  // <Text fontSize='xl'>THE EXCLUSIVE CAPSULE COLLECTION</Text>
  // <Heading as='h1' size='xl' noOfLines={1} >Oscar de la Renta x Mytheresa</Heading>
  // <Button className={styles.hmT_btn}>SHOP NOW <ArrowRightIcon  w={6} h={2}  /> </Button>
  // </Box>
  return (
    <Box w={{ lg: "80%", md: "100%", sm: "100%" }} margin="auto">
      <Stack spacing={12}>
        <Box
          height="430px"
          margin="auto"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          w="100%"
          backgroundPosition="center"
          backgroundImage={property.imageUrl}>
          <Box className={styles.text}>
            <Text fontSize="xl">THE EXCLUSIVE CAPSULE COLLECTION</Text>
            <Heading as="h1" size="xl" noOfLines={1}>
              Oscar de la Renta x Mytheresa
            </Heading>
            <Button className={styles.hmT_btn}>
              SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
            </Button>
          </Box>
        </Box>

        <Box className={styles.hmT2} >
          <Heading as="h4" size="md" fontWeight="300">
            DON'T MISS OUT
          </Heading>
          <Heading as="h5" size="xl">
            New Arrivals
          </Heading>
          <Heading as="h2" size="lg" fontWeight="300">
            Jonathan Simkhai, Proenza Schouler, Staud, Missoni...
          </Heading>
          <Button background="black" className={styles.hmT_btn_shop}>
            SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
          </Button>
        </Box>

        <Grid mb={10} templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Stack>
              <Heading as="h4" fontWeight="300" size="md">
                THE EXCLUSIVE CAPSULE COLLECTION
              </Heading>
              <Heading as="h2" fontWeight="300" size="lg">
                Roger Vivier x Mytheresa
              </Heading>
            </Stack>

            <Box marginTop="30px">
              <Image
                //   w='100%'
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Actbox_Tall_Small_2x_20221107113119.jpg?imwidth=600&imdensity=2"
                alt="hmT3"></Image>
            </Box>

            <Button background="black" className={styles.hmT_btn_shop}>
              SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
            </Button>
          </Box>

          <Stack spacing="53px">
            <Box>
              <Stack>
                <Heading as="h4" fontWeight="300" size="md">
                  LIFE'S LITTLE LUXURIES
                </Heading>
                <Heading as="h2" fontWeight="300" size="lg">
                  Mytheresa presents Gucci Décor
                </Heading>
              </Stack>
              <Stack spacing={5} marginTop="30px">
                <Box>
                  <Image
                    src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxSmall-GucciDecor_2x_20221107113141.jpg?imwidth=600&imdensity=2"
                    alt="htT3"></Image>
                </Box>
                <Box>
                  <Button background="black" className={styles.hmT_btn_shop}>
                    SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
                  </Button>
                </Box>
              </Stack>
            </Box>
            <hr />
            <Box>
              <Stack spacing={5}>
                <Heading as="h4" size="md" fontWeight="300">
                  FAMILY FESTIVITIES
                </Heading>
                <Heading as="h2" size="lg" fontWeight="300">
                  Embrace festive family moments
                </Heading>
              </Stack>

              <Box marginTop="20px">
                <Image
                  src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/Festive-Nov_ActboxSmall_Family_2x_20221107113245.jpg?imwidth=600&imdensity=2"
                  alt="hmT3"></Image>
              </Box>

              <Button background="black" className={styles.hmT_btn_shop}>
                SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
              </Button>
            </Box>
          </Stack>
        </Grid>

        <hr />

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Stack spacing="50px">
              <Box>
                <Stack>
                  <Heading as="h4" fontWeight="300" size="md">
                    THE PERFECT GIFT
                  </Heading>
                  <Heading as="h2" fontWeight="300" size="lg">
                    Heartwarming gifts you'll love
                  </Heading>
                </Stack>
                <Stack spacing={5} marginTop="30px">
                  <Box>
                    <Image
                      src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/Festive-Nov_ActboxSmall_GiftHER_2x_20221028110218.jpg?imwidth=600&imdensity=2"
                      alt="htT3"></Image>
                  </Box>
                  <Box>
                    <Button background="black" className={styles.hmT_btn_shop}>
                      SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
                    </Button>
                  </Box>
                </Stack>
              </Box>
              <hr />
              <Box>
                <Stack spacing={5}>
                  <Heading as="h4" size="md" fontWeight="300">
                    THE IT-BAG EDIT
                  </Heading>
                  <Heading as="h2" size="lg" fontWeight="300">
                    New styles to add to your collection
                  </Heading>
                </Stack>

                <Box marginTop="20px">
                  <Image
                    src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/CW45_ActboxSmall_2x_20221107113353.jpg?imwidth=600&imdensity=2"
                    alt="hmT3"></Image>
                </Box>

                <Button background="black" className={styles.hmT_btn_shop}>
                  SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
                </Button>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack>
              <Heading as="h4" fontWeight="300" size="md">
                Sporty styles for snowy settings
              </Heading>
              <Heading as="h2" fontWeight="300" size="lg">
                The Ski Edit
              </Heading>
            </Stack>

            <Box marginTop="30px">
              <Image
                //   w='100%'
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW45/ActboxTall-SKIEDIT_2x_20221107113331.jpg?imwidth=600&imdensity=2"
                alt="hmT3"></Image>
            </Box>

            <Button background="black" className={styles.hmT_btn_shop}>
              SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
            </Button>
          </Box>
        </Grid>

        <hr />

        <Center>
          <Stack>
            <Heading as="h4" fontWeight="300" size="md">
              IT'S A MATCH
            </Heading>
            <Heading as="h1" fontWeight="300" size="2xl">
              Cozy textures and warm tones
            </Heading>
          </Stack>
        </Center>

        <Stack>
          <Box>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {
                match.map((item, ind) => {
                  return (
                    <GridItem key={ind}>
                      <Image src={item.image} alt={item.title} />
                      <Text>{item.title}</Text>
                    </GridItem>
                  );
                })
                // console.log(match)
              }
            </Grid>
          </Box>
          <Box>
            <Button background="black" className={styles.hmT_btn_shop}>
              SHOP NOW <ArrowRightIcon w={6} h={2} />{" "}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
