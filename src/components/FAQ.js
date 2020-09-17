import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "./FAQ.css";
// import "react-accessible-accordion/dist/fancy-example.css";

function FAQ() {
  return (
    <Accordion allowZeroExpanded className="accordion">
      <AccordionItem className="accordion__item">
        <AccordionItemHeading className="accordion__heading">
          <AccordionItemButton className="accordion__button">
            what is the first step of home ownership?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion__panel">
          <p>
            Getting your finances in order and knowing how much you can afford
            to spend on owning a home.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How long does the process take?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            From searching various properties to closing escrow (finish),
            getting a home can take up to three months but having an exact
            budget can narrow the search down to the types of properties you can
            afford
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Should i sell my current home before buying a new one?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            It depends entirely on you, if selling your current home would
            enable you afford a more valuable one, naturally youll sell the
            former but if that isnt the case then it isnt a necessity.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FAQ;
