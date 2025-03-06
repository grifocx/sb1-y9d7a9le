import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How often should I service my bike?',
    answer:
      'We recommend a basic tune-up every 6 months for regular riders. However, this can vary based on riding frequency, conditions, and style. Mountain bikes and bikes used in wet conditions may need more frequent service.',
  },
  {
    question: 'How long does a typical service take?',
    answer:
      'Basic tune-ups usually take 1-2 days, while comprehensive services may take 2-3 days. During peak season (spring/summer), wait times may be longer. We offer expedited service for emergencies.',
  },
  {
    question: 'Do you work on all bike brands?',
    answer:
      'Yes, our certified technicians are experienced with all major brands and styles of bikes. We\'re authorized warranty service providers for Trek, Specialized, Cannondale, and other leading manufacturers.',
  },
  {
    question: 'What\'s included in a basic tune-up?',
    answer:
      'Our basic tune-up includes a safety check, gear adjustment, brake adjustment, tire inspection, chain lubrication, and basic cleaning. We\'ll also provide recommendations for any necessary repairs or upgrades.',
  },
  {
    question: 'Do I need an appointment for service?',
    answer:
      'While we accept walk-ins for minor repairs, we recommend scheduling an appointment for tune-ups and comprehensive services to ensure prompt attention to your bike.',
  },
  {
    question: 'Do you offer a warranty on service work?',
    answer:
      'Yes, all our service work is backed by a 30-day warranty. If you experience any issues related to our service within this period, we\'ll fix it at no additional cost.',
  },
];

export function ServiceFAQ() {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Frequently Asked Questions About Bike Service in Haymarket</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Common questions about our Northern Virginia bicycle service department
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}