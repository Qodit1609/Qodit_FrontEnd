import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Button,
  Container,
  InputAdornment,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
export const CareerForm = (props) => {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      fontSize: "2rem",
    },
  });

  return (
    <div className="careerFormMainDiv">
      <div className="typographyCSS">
        <CssBaseline />
        <Container maxWidth="sm">
          <ThemeProvider theme={theme}>
            <Typography component="div">
              <h1 className="careerHeading"> APPLY NOW</h1>
              <form style={{ textAlign: "justify", margin: "54px" }}>
                <div>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">Your Name</InputLabel>
                    <Input
                      id="standard-basic"
                      onChange=""
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          Hello! I'm
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">Message</InputLabel>
                    <Input
                      id="standard-basic"
                      onChange=""
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          I would like to talk about
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">
                      Enter Your Email Id
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange=""
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          You can reach me at
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-basic">
                      Enter Your Mobile No.
                    </InputLabel>
                    <Input
                      id="standard-basic"
                      onChange=""
                      color="secondary"
                      startAdornment={
                        <InputAdornment position="start">
                          and Mobile No.
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <span style={{ verticalAlign: "bottom" }}>
                  to chat and discuss next steps{" "}
                </span>
                <div>
                  <span>UPLOAD YOUR RESUME</span>
                  <br />
                  <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden />
                  </Button>
                </div>
                <Button variant="contained" color="secondary">
                  Submit
                </Button>
              </form>
            </Typography>
          </ThemeProvider>
        </Container>
      </div>
    </div>
  );
};
