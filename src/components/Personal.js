import React from "react";

const Personal = () => {
  return (
    <>
      <div className="p-1">
        <h4>
          Using the PGP encryption software to protect (encrypt) your personal
          documents
        </h4>
        <p>
          On your computer in the office or at home, you may well have private
          documents that you do not want others to be able to read. You can use
          your own Public Key to encrypt these documents. You can easily and
          quickly encrypt a single file or a set of files. To decrypt the files,
          you simply reverse the process that follows by selecting the option to
          Decrypt instead of Encrypt from the PGP menu. Here are the steps to
          follow to encrypt a single file or document:
        </p>
        <ol>
          <li>
            Right click on the Start menu in the lower left corner of your
            Windows screen, select the Explore option in the pop-up menu, then
            in the left hand column of the Explore window select the C drive,
            for example, and you'll see the contents of your C drive listed in
            the right hand side of the Exploring window.
          </li>
          <li>
            Right click on any document you have listed there (in the right hand
            side of the Exploring window) and you'll see a new item (PGP) in the
            pop-up menu.
          </li>
          <li>
            Select PGP in the pop-up menu and then you'll see the sub-menu
            option to Encrypt the document you've highlighted. Click on Encrypt.
          </li>
          <li>
            Now you're presented with the Key Selection dialog box. Double click
            on your own Public Key (or drag it down to the Recipients box below)
            and click on OK. PGP has now created a second, encrypted, version of
            the document with a .pgp extension.
          </li>
          <li>
            All you need do now is delete the original, non-encrypted document,
            so that all you have left on your disk is the encrypted file which
            only you can read. Do this right away by right clicking on the
            original and selecting Delete from the pop-up menu.
          </li>
        </ol>
        <p>
          And here are the steps to follow to encrypt a selected set of files or
          all the files or documents in a folder:
        </p>
        <ol>
          <li>
            Right click on the Start menu in the lower left corner of your
            Windows screen, select the Explore option in the pop-up menu, then
            in the left hand column of the Explore window select the C drive,
            for example, and you'll see the contents of your C drive listed in
            the right hand side of the Exploring window.
          </li>
          <li>
            If necessary, open the folder in which you have saved the files you
            want to encrypt, and either drag across them all to select them as a
            group, or click to select the first file in the list, and hold down
            the shift key while you click on the last of the files you want to
            encrypt.
          </li>
          <li>
            Now Right click on any document you have highlighted in the list of
            files you selected (in the right hand side of the Exploring window)
            and you'll see the new item (PGP) in the pop-up menu.
          </li>
          <li>
            Select PGP in the pop-up menu and then you'll see the sub-menu
            option to Encrypt the document(s) you've highlighted. Click on
            Encrypt.
          </li>
          <li>
            Now you're presented with the Key Selection dialog box. Double click
            on your own Public Key (or drag it down to the Recipients box below)
            and click on OK. PGP will now go ahead and create a second,
            encrypted, version of each of the files or documents you selected.
          </li>
          <li>
            All you need do now is delete the original, non-encrypted documents,
            so that all you have left on your disk are the encrypted files which
            only you can read. Do this right away. The original documents still
            should be selected as a block, though if they aren't, just click on
            the Type header at the top of the Explore window to sort the files
            as encypted and non-encrypted. Now, with all the originals selected
            (highlighted), right click on any one of them, then select Delete
            from the pop-up menu.
          </li>
        </ol>
        <p>
          You can also encrypt and decrypt the entire contents of a folder by
          simply right clicking on the folder and selecting Encrypt from the PGP
          sub menu. But this is not as convenient as opening the folder first
          and selecting the files as a list before encrypting them since, after
          PGP has finished the encryption process, you'll have to delete the
          original files one by one.
        </p>
        <p>
          Deleting files on your disks raises another issue, which you can learn
          about in the next section...
        </p>
      </div>
    </>
  );
};

export default Personal;
