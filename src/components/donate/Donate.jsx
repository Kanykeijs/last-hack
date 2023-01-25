import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Donate.css";
import { CardMedia } from "@mui/material";

export default function SimpleAccordion() {
  return (
    <>
      <CardMedia
        sx={{ height: 520 }}
        image="https://png.pngtree.com/background/20221206/original/pngtree-digital-credit-card-payment-background-in-fast-technology-style-picture-image_1984031.jpg"
        title="green iguana"
      />
      <div>
        <h1 className="h1">Сделать пожертвование детям</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel2a-header"
          >
            <Typography className="komu">кому ?</Typography>
          </AccordionSummary>
          <AccordionDetails className="acrd">
            <Typography>детям</Typography>
            <br />
            <br />
            <Typography>животным</Typography>
            <br />
            <br />
            <Typography>В дом престарелых</Typography>
            <br />
            <br />
            <Typography>в приют для пожилых бездомных людей</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
