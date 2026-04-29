import { Container, createStyles, Group, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Logo from "../components/Logo";
import Meta from "../components/Meta";
import useUser from "../hooks/user.hook";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.md} * 4)`,
    paddingBottom: `calc(${theme.spacing.md} * 4)`,
  },

  content: {
    maxWidth: 520,
    marginRight: `calc(${theme.spacing.md} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const { refreshUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    refreshUser().then((user) => {
      if (user) {
        router.replace("/upload");
      }
    });
  }, [refreshUser, router]);

  return (
    <>
      <Meta title="Home" />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <FormattedMessage id="home.title" />
            </Title>
            <Text color="dimmed" mt="md" size="md">
              <FormattedMessage id="home.description" />
            </Text>
          </div>
          <Group className={classes.image} align="center">
            <Logo width={200} height={200} />
          </Group>
        </div>
      </Container>
    </>
  );
}
