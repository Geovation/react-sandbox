import { useAuth, useUser, SuspenseWithPerf, useSigninCheck } from "reactfire";
import Button from "@material-ui/core/Button";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const signOut = (auth) => auth.signOut().then(() => console.log("signed out"));

const UserDetails = () => {
  const auth = useAuth();
  const { data: user } = useUser();
  console.log(user);

  return (
    <>
      {user?.displayName ? user.displayName : "Could not find display name"}

      <ul>{user?.email ? <li>{user.email}</li> : <div></div>}</ul>
      <Button variant="contained" onClick={() => signOut(auth)}>
        Sign Out
      </Button>
    </>
  );
};

const SignInForm = () => {
  const auth = useAuth;

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      auth.EmailAuthProvider.PROVIDER_ID,
      auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
};

function UserFlow() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (signInCheckResult.signedIn === true) {
    return <UserDetails />;
  } else {
    return <SignInForm />;
  }
}

function AuthPage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", minWidth: "50vw" }}
    >
      <Grid item container xs={7} sm={7} md={6} xl={2}>
        <SuspenseWithPerf
          traceId={"firebase-user-wait"}
          fallback={<CircularProgress />}
        >
          <UserFlow />
        </SuspenseWithPerf>
      </Grid>
    </Grid>
  );
}

export default AuthPage;
