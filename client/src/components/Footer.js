import React from "react";
import "../styles/footer.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/japinell/KU-CBC-Project-3-WMS"
      >
        Mini-WMS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Container>
      <section className="footer">
        <div className="all">
          <a href="#" target="_blank" className="lefter">
            <div className="text">Link Here</div>
          </a>
          <a href="#" target="_blank" className="left">
            <div className="text">Link Here</div>
          </a>
          <a href="#" target="_blank" className="center">
            <div className="explainer">
              <span>Hover Me</span>
            </div>
            <div className="text">GitHub</div>
          </a>
          <a href="#" target="_blank" className="right">
            <div className="text">Link Here</div>
          </a>
          <a href="" target="_blank" className="righter">
            <div className="text">Link Here</div>
          </a>
        </div>
      </section>
    </Container>
  );
}
