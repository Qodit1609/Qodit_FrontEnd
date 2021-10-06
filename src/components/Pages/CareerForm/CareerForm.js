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
  ButtonGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { grey, blueGrey, } from "@material-ui/core/colors";

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
    root: {
      color: "#FFFFFF"
    },
    typography: {
      fontSize: "2rem",
      color:'#fff',
      allVariants: {
        color: '#fff'
      }
    },
  });

  const style ={
    form:{
      backgroundColor: '#37474F',
	  borderRadius: '2rem',
	  padding: '60px 40px 10px 40px',
    paddingTop:'10rem',
    }
  }
  const secondary = grey['#fafafa']
  return (
    <div className="careerFormMainDiv">
<div style={{position:'absolute',width:'100%'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,160C480,181,600,235,720,224C840,213,960,139,1080,122.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
            {/* <ApplyNow/> */}
      <div className="typographyCSS" >
        <CssBaseline />
        <Container maxWidth="sm">
          <ThemeProvider theme={theme}>
            <Typography component="div" style={style.form}>
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
                        <InputAdornment  position="start">
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
                  {/* to chat and discuss next steps{" "} */}
                </span>
                {/* <div>
                  <span style={{fontSize:'1.5rem'}}>UPLOAD YOUR RESUME</span>
                </div> */}
                <ButtonGroup>
                  <Button variant="contained" component="label">
                    Upload Resume
                    <input type="file" hidden />
                  </Button>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
                </ButtonGroup>
              </form>
            </Typography>
          </ThemeProvider>
        </Container>
      </div>
    </div>
  );
};
