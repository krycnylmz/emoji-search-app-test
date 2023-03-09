
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from './App';
import emojiList from "./emojiList.json";

describe("Emoji Search Tests",()=>{
  let header,emoji,input;

  beforeEach(()=>{
    render(<App/>);
  })
  
  
  it('Header text should be on document', () => { 
    header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
  })
  
  
  test("First 50 element should be on document",() => {
    emoji = emojiList.slice(0, 50);
    emoji.map((item)=> {expect(screen.getByText(item.title)).toBeInTheDocument();});
  })
  
  
  test("when type on the search bar, it should return 14 element", () => {
    input = screen.getByPlaceholderText('Search emoji...');
    const filter = "face smiley";
      const emojies = emojiList.filter(
        (val) => val.keywords.toLowerCase().match(filter) || val.title.toLowerCase().match(filter) 
    );
    
    fireEvent.change(input, {target: {value: filter}});
    emojies.map((emoji) =>              
    {
      expect(screen.getByText(emoji.title)).toBeInTheDocument();
    });
  });

  test('Emojies can be copyable, copy', async () => {
    const element = screen.getByText("100");
    const button = element.parentElement.parentElement.lastChild;
    console.log(`panda ${button}`);
    userEvent.click(button);
    // expect(click.parentElement.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
      expect(button.parentElement.getAttribute("data-clipboard-text")).toMatch("💯");
  });


});