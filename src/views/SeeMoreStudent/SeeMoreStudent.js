import React, { useState } from "react";
import "./SeeMoreStudent.scss";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const SeeMore = () => {
  const classes = useStyles();
  const [recentResult, setRecentResult] = useState();
  return (
    <div>
      <GridItem xs={12} sm={12} md={19}>
        <Card>
          <CardHeader color="success" style={{ marginBottom: -30 }}>
            <h4 className={classes.cardTitleWhite}>Student List</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={[
                "ID",
                "Name",
                "Address",
                "Age",
                "Gender",
                "Faculty",
                "Time",
              ]}
              tableData={[]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </div>
  );
};

export default SeeMore;