import React from "react";

const Wipe = () => {
  return (
    <>
      <h4>Using PGP to Wipe files from your disks</h4>
      <p>
        When you delete a file, is the data it contains removed from your disk?
        Answer: No! You may not be able to see the name of the file anymore if
        you list the contents of your disk, but someone who knows what they're
        doing can easily resurrect it and, if it's not encrypted, read it. When
        you delete a file, all you're doing is removing the link to it from the
        disk's index of files. It's like a card catalog in a library. Every book
        in the library has a card in the catalog which helps you find it on the
        shelves. If you remove the card from the catalog, you'll have a problem
        finding the book--but it's still out there on the shelves. When you
        delete a file on your disk, it's like removing the card from the
        catalog. The file's still there on the disk, even though you can't
        easily get to it. To remove it completely, you must Wipe that part of
        the disk clean, and this is what the PGP Wipe function does for you.
        Let's try it for practice.
      </p>
      <ul>
        <li>
          Use your word processor to create a dummy file and save it with the
          name Dummy. Put any old garbage in it, since you're going to Wipe it
          off your disk in a minute.
        </li>
        <li>
          Now locate the Dummy document using the Explore option in the Start
          menu (as you did just now in Step 12).
        </li>
        <li>
          Right click on the Dummy document and select the option in the pop-up
          menu to Wipe the file. Simple as that. PGP writes a bunch of random
          data to the place on your disk where the Dummy file was saved,
          effectively removing all trace of the original data. Neat, huh?
        </li>
      </ul>
    </>
  );
};

export default Wipe;
