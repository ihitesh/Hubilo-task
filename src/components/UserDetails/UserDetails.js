import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "20px 0",
  },
  name: {
    fontSize: 18,
    marginBottom: 15,
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
  },
});

const UserDetails = ({ name, email, phone, companyName, website }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h5" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="h3" component="h5" className={classes.info}>
          Email: {email}
        </Typography>
        <Typography variant="h3" component="h5" className={classes.info}>
          Phone : {phone}
        </Typography>
        <Typography variant="h5" component="h5" className={classes.info}>
          Company: {companyName}
        </Typography>
        <Typography variant="h5" component="h5" className={classes.info}>
          Website : {website}
        </Typography>
      </CardContent>
    </Card>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  companyName: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UserDetails;
