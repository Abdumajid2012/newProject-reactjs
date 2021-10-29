import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Row, Col } from 'reactstrap';

function Accordion1() {
  return (
    <div className="Accordionn">
      <Container>
        <Row>
          <Col md="12">
            <div className="acc">
           <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><h5 className="blue">Html5</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             <h5>1. Web haqida</h5>
          </Typography>
          <Typography>
             <h5>2. Kirish</h5>
          </Typography>
          <Typography>
             <h5>3. Dasturlash muhiti</h5>
          </Typography>
          <Typography>
             <h5>4. Hujjat stukturasi va "!Doctype"</h5>
          </Typography>
          <Typography>
             <h5>5. Elementlar va "Atribut"lar</h5>
          </Typography>
          <Typography>
             <h5>6. "Headings(Sarlavhalar)"</h5>
          </Typography>
          <Typography>
             <h5>7. "Paragraphs"(Xatbowilar)</h5>
          </Typography>
          <Typography>
             <h5>8. Styles(stillar)</h5>
          </Typography>
          <Typography>
             <h5>9. Formatting (Formatlash)</h5>
          </Typography>
          <Typography>
             <h5>10. Comments(Izohlar)</h5>
          </Typography>
          <Typography>
             <h5>11. Links</h5>
          </Typography>
          <Typography>
             <h5>12. Images</h5>
          </Typography>
          <Typography>
             <h5>13. Tables (Jadvallar)</h5>
          </Typography>
          <Typography>
             <h5>14. Lists(Ro'yhatlar)</h5>
          </Typography>
          <Typography>
             <h5>15. "ID", "Class"</h5>
          </Typography>
          <Typography>
             <h5>16. Div va span</h5>
          </Typography>
          <Typography>
             <h5>17. Forms</h5>
          </Typography>
          <Typography>
             <h5>18. "Layout" va "Semantics"</h5>
          </Typography>
          <Typography>
             <h5>19. Audio, Video va Youtobe</h5>
          </Typography>
          <Typography>
             <h5>20. Loyiha</h5>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
     

<div className="acc">
   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><h5 className="blue">Css3</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
              <Typography >
          <h5>1. Css haqida </h5>
          </Typography>
          <Typography >
          <h5>2. Color va Font</h5>
          </Typography>
          <Typography >
          <h5>3. Class va id</h5>
          </Typography>
          <Typography >
          <h5>4. padding margin</h5>
          </Typography>
          <Typography >
          <h5>5. Link va navigation</h5>
          </Typography>
          <Typography >
          <h5>6. Flexbox</h5>
          </Typography>
          <Typography >
          <h5>7. Grid</h5>
          </Typography>
          <Typography >
          <h5>8. Position</h5>
          </Typography>
          <Typography >
          <h5>9. Inspect qowimcha malum..</h5>
          </Typography>
          <Typography >
          <h5>10. Sass</h5>
          </Typography>
          <Typography >
          <h5>11. Amaliyot darslar..</h5>
          </Typography>
          </div>
        
        </AccordionDetails>
      </Accordion>

</div>
     
      
<div className="acc">
   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><h5 className="blue">Java script</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
              <Typography>
               <h5>1. Kirish</h5>
          </Typography>
          <Typography >
          <h5>2. Ish joyini sozlash</h5>
          </Typography>
          <Typography >
          <h5>3. O'zgaruvchilar</h5>
          </Typography>
          <Typography >
          <h5>4. Data type </h5>
          </Typography>
          <Typography >
          <h5>5. For Loop</h5>
          </Typography>
          <Typography >
          <h5>6.If else Switch case</h5>
          </Typography>
          <Typography >
          <h5>7.Function va return</h5>
          </Typography>
          <Typography >
          <h5>8.Dom bilan ishlash..</h5>
          </Typography>
          <Typography >
          <h5>Amaliyot (Project)</h5>
          </Typography>
          </div>
        
        </AccordionDetails>
      </Accordion>

</div>

<div className="acc">
   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><h5 className="blue">Bo'nus qism</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
              <Typography className="acc">
             <h5> Xozircha Bo'sh </h5>
          </Typography>
          </div>
        
        </AccordionDetails>
      </Accordion>

</div>
     
          </Col>
        </Row>
      </Container>
   
    </div>
  );
}

export default Accordion1;