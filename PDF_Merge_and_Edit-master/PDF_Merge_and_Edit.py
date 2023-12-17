import PyPDF2
import os
import time
import fitz
import img2pdf
import sys
import webbrowser
import favicon
import tkinter as tk
from tkinter import filedialog
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from PyPDF2 import PdfReader, PdfWriter
# from PyPDF2.pdf import PageObject
from PyPDF2.generic import createStringObject
# from PyPDF2.utils import b_
# Written by Simon Wong
# https://github.com/simonwongwong

def popup(text):
    textwindow = tk.Tk()
    textwindow.title('Error!')
    textwindow.minsize(width=300, height=50)
    label = tk.Label(textwindow, text=text)
    label.pack()
    label.configure(pady=20)
    textwindow.mainloop()


def finished(file, operation, window):
    finishPrompt = tk.Tk()
    finishPrompt.title(operation + " completed!")
    tk.Label(finishPrompt, text=operation + " finished. Would you like to open the file now?").grid(row=0, column=0, columnspan=2, pady=5, padx=5)
    tk.Button(finishPrompt, text="Open file", command=lambda: webbrowser.open(file)).grid(row=1, column=0, pady=5, padx=5, sticky=stickyFill)
    tk.Button(finishPrompt, text="Finished", command=lambda: finishPrompt.destroy()).grid(row=1, column=1, pady=5, padx=5, sticky=stickyFill)
    finishPrompt.mainloop()


def filePicker(entry, window):
    file = filedialog.askopenfilename(title="Choose PDF file", filetypes=(("PDF", "*.pdf"),), initialdir=os.getcwd())

    if entry.get() == "":
        entry.insert(0, file)
    else:
        entry.delete(0, 'end')
        entry.insert(0, file)

    window.lift()

def imgFilePicker(entry, window, multiple=False):
    file_types = [
        ('PNG Files', '*.png'),
        ('JPEG Files', '*.jpg'),
        ('JPEG Files', '*.jpeg'),
        ('GIF Files', '*.gif'),
        ('All files', '*.*')
    ]

    if multiple:
        files = filedialog.askopenfilenames(title="Choose Image files", filetypes=file_types, initialdir=os.getcwd())
    else:
        files = filedialog.askopenfilename(title="Choose Image file", filetypes=file_types, initialdir=os.getcwd())

    if files:
        if entry.get() == "":
            entry.insert(0, files)
        else:
            entry.delete(0, 'end')
            entry.insert(0, files)

    window.lift()

def merge():

    mergeWindow = tk.Tk()
    mergeWindow.title("PDF merger")

    tk.Label(mergeWindow, text="Creates a new PDF file with the second file added to the end of the first file").grid(row=0, column=0, columnspan=3, padx=10, pady=3, sticky=stickyFill)

    tk.Label(mergeWindow, text="Select first PDF file:").grid(row=1, column=0, padx=10, pady=3)
    firstFile = tk.Entry(mergeWindow)
    firstFile.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(mergeWindow, text="Browse...", command=lambda entry=firstFile, window=mergeWindow: filePicker(entry, window)).grid(row=1, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(mergeWindow, text="Select second PDF file:").grid(row=2, column=0, padx=10, pady=3)
    secondFile = tk.Entry(mergeWindow)
    secondFile.grid(row=2, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(mergeWindow, text="Browse...", command=lambda entry=secondFile, window=mergeWindow: filePicker(entry, window)).grid(row=2, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(mergeWindow, text="Desired name of merged file:").grid(row=3, column=0)
    mergedFile = tk.Entry(mergeWindow)
    mergedFile.grid(row=3, column=1, columnspan=2, padx=5, pady=5, sticky=stickyFill)

    tk.Button(mergeWindow, text="Merge!", command=lambda: mergeWindow.quit()).grid(row=4, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

    mergeWindow.mainloop()

    firstFile = checkExist(firstFile.get())
    secondFile = checkExist(secondFile.get())
    mergedFile = mergedFile.get()

    mergedBook = PyPDF2.PdfMerger()
    mergedBook.append(firstFile)
    mergedBook.append(secondFile)

    fullbook = open(mergedFile + '.pdf', 'wb')
    mergedBook.write(fullbook)
    mergedBook.close()
    fullbook.close()
    mergeWindow.destroy()
    finished(mergedFile + ".pdf", "Merge", mergeWindow)


def pageUpdate():
    updaterWindow = tk.Tk()
    updaterWindow.title("PDF page updater")

    tk.Label(updaterWindow, text="Updates a single page inside an existing PDF").grid(row=0, column=0, columnspan=3, padx=10, pady=3, sticky=stickyFill)

    tk.Label(updaterWindow, text="Select PDF file to edit:").grid(row=1, column=0, padx=10, pady=3)
    updateFile = tk.Entry(updaterWindow)
    updateFile.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(updaterWindow, text="Browse...", command=lambda entry=updateFile, window=updaterWindow: filePicker(entry, window)).grid(row=1, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(updaterWindow, text="Page to update:").grid(row=2, column=0, padx=10, pady=3)
    pageToUpdate = tk.Entry(updaterWindow)
    pageToUpdate.grid(row=2, column=1, sticky=stickyFill, pady=5, padx=5)

    tk.Label(updaterWindow, text="Select PDF file with updated page:").grid(row=3, column=0, padx=10, pady=3)
    updatedPage = tk.Entry(updaterWindow)
    updatedPage.grid(row=3, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(updaterWindow, text="Browse...", command=lambda entry=updatedPage, window=updaterWindow: filePicker(entry, window)).grid(row=3, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(updaterWindow, text="Page number of updated page:").grid(row=4, column=0, padx=10, pady=3)
    pageWithUpdate = tk.Entry(updaterWindow)
    pageWithUpdate.grid(row=4, column=1, sticky=stickyFill, pady=5, padx=5)
    pageWithUpdate.insert(0, "1")

    tk.Button(updaterWindow, text="Update!", command=lambda: updaterWindow.quit()).grid(row=5, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

    updaterWindow.mainloop()

    filename = updateFile.get()
    filename = filename[:-4] + '-updated.pdf'
    updateFile = checkExist(updateFile.get())
    pageToUpdate = int(pageToUpdate.get())
    updatedPage = checkExist(updatedPage.get())
    pageWithUpdate = int(pageWithUpdate.get())

    if pageToUpdate == 0 or pageWithUpdate == 0:
        popup("invalid page number, must be greater than 0")

    originalPDF = PyPDF2.PdfReader(updateFile)
    updatedPagePDF = PyPDF2.PdfReader(updatedPage)

    updatedPDF = PyPDF2.PdfWriter()
    updatedPDF.clone_document_from_reader(originalPDF)
    try:
        updatedPDF.insert_page(updatedPagePDF.pages[pageWithUpdate - 1], pageToUpdate - 1)
    except IndexError:
        popup("Please check if page number is within range")

    outputFile = open(filename, 'wb')

    pdfOut = PyPDF2.PdfWriter()

    for i in range(len(updatedPDF.pages)):
        if i != pageToUpdate:
            pdfOut.add_page(updatedPDF.pages[i])

    pdfOut.write(outputFile)
    outputFile.close()

    updaterWindow.destroy()
    finished(filename, "Page update", updaterWindow)


def insertPage():
    inserterWindow = tk.Tk()
    inserterWindow.title("PDF page inserter")

    tk.Label(inserterWindow, text="Inserts a single page inside an existing PDF").grid(row=0, column=0, columnspan=3, padx=10, pady=3, sticky=stickyFill)

    tk.Label(inserterWindow, text="Select PDF file to edit:").grid(row=1, column=0, padx=10, pady=3)
    updateFile = tk.Entry(inserterWindow)
    updateFile.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(inserterWindow, text="Browse...", command=lambda entry=updateFile, window=inserterWindow: filePicker(entry, window)).grid(row=1, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(inserterWindow, text="Page number where new page will be inserted:").grid(row=2, column=0, padx=10, pady=3)
    pageToInsert = tk.Entry(inserterWindow)
    pageToInsert.grid(row=2, column=1, sticky=stickyFill, pady=5, padx=5)

    tk.Label(inserterWindow, text="Select PDF file with page to be inserted:").grid(row=3, column=0, padx=10, pady=3)
    fileWithInsert = tk.Entry(inserterWindow)
    fileWithInsert.grid(row=3, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(inserterWindow, text="Browse...", command=lambda entry=fileWithInsert, window=inserterWindow: filePicker(entry, window)).grid(row=3, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(inserterWindow, text="Page number of page to be inserted:").grid(row=4, column=0, padx=10, pady=3)
    pageWithInsert = tk.Entry(inserterWindow)
    pageWithInsert.grid(row=4, column=1, sticky=stickyFill, pady=5, padx=5)
    pageWithInsert.insert(0, "1")

    tk.Button(inserterWindow, text="Insert!", command=lambda: inserterWindow.quit()).grid(row=5, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

    inserterWindow.mainloop()

    filename = updateFile.get()
    filename = filename[:-4] + '-updated.pdf'
    updateFile = checkExist(updateFile.get())
    pageToInsert = int(pageToInsert.get())
    fileWithInsert = checkExist(fileWithInsert.get())
    pageWithInsert = int(pageWithInsert.get())

    if pageToInsert == 0 or pageWithInsert == 0:
        popup("invalid page number, must be greater than 0")

    originalPDF = PyPDF2.PdfReader(updateFile)
    PDFwithInsert = PyPDF2.PdfReader(fileWithInsert)

    updatedPDF = PyPDF2.PdfWriter()
    updatedPDF.clone_document_from_reader(originalPDF)
    try:
        updatedPDF.insert_page(PDFwithInsert.pages[pageWithInsert - 1], pageToInsert - 1)
    except IndexError:
        popup("Please check if page number is within range")

    outputFile = open(filename, 'wb')

    pdfOut = PyPDF2.PdfWriter()

    for i in range(len(updatedPDF.pages)):
        pdfOut.add_page(updatedPDF.pages[i])

    pdfOut.write(outputFile)
    outputFile.close()

    inserterWindow.destroy()
    finished(filename, "Page insert", inserterWindow)


def deletePage():
    deleterWindow = tk.Tk()
    deleterWindow.title("PDF page deleter")

    tk.Label(deleterWindow, text="Deletes a single page inside an existing PDF").grid(row=0, column=0, columnspan=3, padx=10, pady=3, sticky=stickyFill)

    tk.Label(deleterWindow, text="Select PDF file to edit:").grid(row=1, column=0, padx=10, pady=3)
    updateFile = tk.Entry(deleterWindow)
    updateFile.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(deleterWindow, text="Browse...", command=lambda entry=updateFile, window=deleterWindow: filePicker(entry, window)).grid(row=1, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(deleterWindow, text="Page to delete:").grid(row=2, column=0, padx=10, pady=3)
    pageToDelete = tk.Entry(deleterWindow)
    pageToDelete.grid(row=2, column=1, sticky=stickyFill, pady=5, padx=5)

    tk.Button(deleterWindow, text="Delete!", command=lambda: deleterWindow.quit()).grid(row=3, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

    deleterWindow.mainloop()

    filename = updateFile.get()
    filename = filename[:-4] + '-updated.pdf'
    updateFile = checkExist(updateFile.get())
    pageToDelete = int(pageToDelete.get())

    if pageToDelete == 0:
        popup("invalid page number, must be greater than 0")

    originalPDF = PyPDF2.PdfReader(updateFile)

    updatedPDF = PyPDF2.PdfWriter()
    updatedPDF.clone_document_from_reader(originalPDF)
    try:
        updatedPDF.pages[pageToDelete - 1]
    except IndexError:
        popup("Please check if page number is within range")

    outputFile = open(filename, 'wb')

    pdfOut = PyPDF2.PdfWriter()

    for i in range(len(updatedPDF.pages)):
        if i != pageToDelete - 1:
            pdfOut.add_page(updatedPDF.pages[i])

    pdfOut.write(outputFile)
    outputFile.close()

    deleterWindow.destroy()
    finished(filename, "Page delete", deleterWindow)


def checkExist(fileName):
    try:
        openedFile = open(fileName, 'rb')
        return openedFile
    except FileNotFoundError:
        popup('"' + fileName + '"' + " not found. Please restart program")

def compress():
    compressWindow = tk.Tk()
    compressWindow.title("PDF Compression")

    tk.Label(compressWindow, text="Select PDF file to compress:").grid(row=0, column=0, padx=10, pady=3)
    input_file = tk.Entry(compressWindow)
    input_file.grid(row=0, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(compressWindow, text="Browse...", command=lambda entry=input_file, window=compressWindow: filePicker(entry, window)).grid(row=0, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(compressWindow, text="Output file name:").grid(row=1, column=0, padx=10, pady=3)
    output_file = tk.Entry(compressWindow)
    output_file.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)

    tk.Button(compressWindow, text="Compress!", command=lambda: compressWindow.quit()).grid(row=2, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

    compressWindow.mainloop()

    input_file_path = input_file.get()
    output_file_path = output_file.get()

    if not output_file_path:
        output_file_path = "compressed_" + os.path.basename(input_file_path)

    input_file_path = checkExist(input_file_path)

    with open(output_file_path, 'wb') as output_file:
        pdf_writer = PyPDF2.PdfWriter()
        pdf_reader = PyPDF2.PdfReader(input_file_path)
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            page.compress_content_streams()
            # page.compress_content_streams()  # This is CPU intensive!
            # writer.add_page(page)
            pdf_writer.add_page(page)

        with open(output_file_path, 'wb') as output_file:
            pdf_writer.write(output_file)
        # for page_num in range(len(pdf_reader.pages)):
        #     page = pdf_reader.pages[page_num]
        #     pdf_writer.add_page(page)
        # for page in pdf_writer.pages:
        #     # ⚠️ This has to be done on the writer, not the reader!
            # page.compress_content_streams()  # This is CPU intensive!
        # pdf_writer.write(output_file)

    compressWindow.destroy()
    finished(output_file_path, "Compression", compressWindow)

def text_extraction():
    textExtractWindow = tk.Tk()
    textExtractWindow.title("PDF Text Extraction")

    tk.Label(textExtractWindow, text="Select PDF file for text extraction:").grid(row=0, column=0, padx=10, pady=3)
    input_file = tk.Entry(textExtractWindow)
    input_file.grid(row=0, column=1, sticky=tk.N + tk.E + tk.W + tk.S, pady=5, padx=5)
    tk.Button(textExtractWindow, text="Browse...", command=lambda entry=input_file, window=textExtractWindow: filePicker(entry, window)).grid(row=0, column=2, pady=5, padx=5, sticky=tk.N + tk.E + tk.W + tk.S)
    tk.Button(textExtractWindow, text="Extract Text", command=lambda: perform_text_extraction(input_file.get(), textExtractWindow)).grid(row=1, column=0, columnspan=3, padx=5, pady=10, sticky=tk.N + tk.E + tk.W + tk.S)
    textExtractWindow.mainloop()

def perform_text_extraction(pdf_path, window):
    pdf_path = checkExist(pdf_path)

    # extracted_text = extract_text_from_pdf(pdf_path)
    output_file_path = "extracted_text.txt"
    text=""
    with open(output_file_path, 'w', encoding='utf-8') as output_file:
        # pdf_writer = PyPDF2.PdfWriter()
        pdf_reader = PyPDF2.PdfReader(pdf_path)
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text+=page.extract_text()
        output_file.write(text)

    window.destroy()
    finished(output_file_path, "Text Extraction", window)

def add_watermark_gui():
    addWatermarkWindow = tk.Tk()
    addWatermarkWindow.title("Add Watermark")

    tk.Label(addWatermarkWindow, text="Select PDF file:").grid(row=0, column=0, padx=10, pady=3)
    input_file = tk.Entry(addWatermarkWindow)
    input_file.grid(row=0, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(addWatermarkWindow, text="Browse...", command=lambda entry=input_file, window=addWatermarkWindow: filePicker(entry, window)).grid(row=0, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(addWatermarkWindow, text="Output file name:").grid(row=1, column=0, padx=10, pady=3)
    output_file = tk.Entry(addWatermarkWindow)
    output_file.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)

    # tk.Label(addWatermarkWindow, text="Watermark text:").grid(row=2, column=0, padx=10, pady=3)
    # watermark_text = tk.Entry(addWatermarkWindow)
    # watermark_text.grid(row=2, column=1, sticky=stickyFill, pady=5, padx=5)

    # tk.Button(addWatermarkWindow, text="Add Watermark", command=lambda: addWatermarkWindow.quit()).grid(row=3, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)
    tk.Label(addWatermarkWindow, text="Select Watermark image:").grid(row=3, column=0, padx=10, pady=3)
    watermark_image_entry = tk.Entry(addWatermarkWindow)
    watermark_image_entry.grid(row=3, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(addWatermarkWindow, text="Browse...", command=lambda entry=watermark_image_entry, window=addWatermarkWindow: filePicker(entry, window)).grid(row=3, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Button(addWatermarkWindow, text="Add Watermark", command=lambda: addWatermarkWindow.quit()).grid(row=4, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)
    addWatermarkWindow.mainloop()

    input_file_path = input_file.get()
    output_file_path = output_file.get()
    # watermark_text_value = watermark_text.get()
    watermark_pdf_path = watermark_image_entry.get()
    if not output_file_path:
        output_file_path = "watermarked_" + os.path.basename(input_file_path)

    input_file_path = checkExist(input_file_path)
    watermark_pdf_path = checkExist(watermark_pdf_path)

    # add_watermark(input_file_path, output_file_path, watermark_text_value)
    add_watermark(input_file_path, output_file_path, watermark_pdf_path)

    addWatermarkWindow.destroy()
    finished(output_file_path, "Add Watermark", addWatermarkWindow)

def add_watermark(input_pdf, output_pdf, watermark_pdf):
    
    # Merge the watermark PDF with the input PDF
    input_pdf_reader = PyPDF2.PdfReader(input_pdf)
    watermark_pdf_reader = PyPDF2.PdfReader(watermark_pdf)

    # Create a PDF writer for the output file
    pdf_writer = PyPDF2.PdfWriter()

    # Add each page from the input PDF with the watermark
    for page_num in range(len(input_pdf_reader.pages)):
        # input_page = input_pdf_reader.pages[page_num]
        # watermark_page = watermark_pdf_reader.pages[0]  # Use the first page of the watermark PDF
        # mediabox = input_page.mediabox
        # reader_watermark = PdfReader(watermark_pdf)
        # input_page.merge_page(watermark_page)
        # input_page.mediabox=mediabox
        # pdf_writer.add_page(input_page)
        content_page = input_pdf_reader.pages[page_num]
        mediabox = content_page.mediabox

        # You need to load it again, as the last time it was overwritten
        reader_stamp = PdfReader(watermark_pdf)
        image_page = reader_stamp.pages[0]

        image_page.merge_page(content_page)
        image_page.mediabox = mediabox
        pdf_writer.add_page(image_page)

    # Write the output PDF
    with open(output_pdf, 'wb') as output_file:
        pdf_writer.write(output_file)

    # Remove the temporary watermark PDF file
    # os.remove(watermark_pdf)

# def images_to_pdf():
#     imgToPdfWindow = tk.Tk()
#     imgToPdfWindow.title("Images to PDF")

#     tk.Label(imgToPdfWindow, text="Select images to convert:").grid(row=0, column=0, padx=10, pady=3)
#     img_files = tk.Entry(imgToPdfWindow)
#     img_files.grid(row=0, column=1, sticky=stickyFill, pady=5, padx=5)
#     tk.Button(imgToPdfWindow, text="Browse...", command=lambda entry=img_files, window=imgToPdfWindow: imgFilePicker(entry, window)).grid(row=0, column=2, pady=5, padx=5, sticky=stickyFill)

#     tk.Label(imgToPdfWindow, text="Output PDF file name:").grid(row=1, column=0, padx=10, pady=3)
#     output_pdf = tk.Entry(imgToPdfWindow)
#     output_pdf.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)

#     tk.Button(imgToPdfWindow, text="Convert!", command=lambda: imgToPdfWindow.quit()).grid(row=2, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

#     imgToPdfWindow.mainloop()

#     img_files_path = img_files.get()
#     output_pdf_path = output_pdf.get()

#     if not output_pdf_path:
#         output_pdf_path = "converted_images.pdf"

#     img_files_list = img_files_path.split()
    
#     # Convert images to PDF using img2pdf
#     pdf_data = img2pdf.convert(img_files_list)
    
#     # Write the PDF file
#     with open(output_pdf_path, 'wb') as pdf_file:
#         pdf_file.write(pdf_data)

#     imgToPdfWindow.destroy()
#     finished(output_pdf_path, "Images to PDF", imgToPdfWindow)

def images_to_pdf():
    imgToPdfWindow = tk.Tk()
    imgToPdfWindow.title("Images to PDF")

    tk.Label(imgToPdfWindow, text="Select images to convert:").grid(row=0, column=0, padx=10, pady=3)
    img_files = tk.Entry(imgToPdfWindow)
    img_files.grid(row=0, column=1, sticky=stickyFill, pady=5, padx=5)
    tk.Button(imgToPdfWindow, text="Browse...", command=lambda entry=img_files, window=imgToPdfWindow: imgFilePicker(entry, window, multiple=True)).grid(row=0, column=2, pady=5, padx=5, sticky=stickyFill)

    tk.Label(imgToPdfWindow, text="Output PDF file name:").grid(row=1, column=0, padx=10, pady=3)
    output_pdf = tk.Entry(imgToPdfWindow)
    output_pdf.grid(row=1, column=1, sticky=stickyFill, pady=5, padx=5)

    tk.Button(imgToPdfWindow, text="Convert!", command=lambda: imgToPdfWindow.quit()).grid(row=2, column=0, columnspan=3, padx=5, pady=10, sticky=stickyFill)

    imgToPdfWindow.mainloop()

    img_files_path = img_files.get()
    output_pdf_path = output_pdf.get()
    if not output_pdf_path:
        output_pdf_path = "converted_images.pdf"

    img_files_list = img_files_path.split()
    print(img_files_list)

    # Convert images to PDF using img2pdf
    pdf_data = img2pdf.convert(img_files_list)

    # Write the PDF file
    with open(output_pdf_path, 'wb') as pdf_file:
        pdf_file.write(pdf_data)

    imgToPdfWindow.destroy()
    finished(output_pdf_path, "Images to PDF", imgToPdfWindow)


def edit_pdf():
    webbrowser.open_new_tab("https://www.pdfescape.com/online-pdf-editor/")

selector = tk.Tk()
selector.configure(padx=10, pady=10)
selector.title("PDF Editor")
icon = tk.PhotoImage(data=favicon.icon)
selector.tk.call('wm', 'iconphoto', selector._w, icon)

stickyFill = tk.N + tk.E + tk.W + tk.S

# body of GUI
tk.Label(selector, text="Functions:").grid(row=0, column=1, pady=5, padx=5)
tk.Button(selector, text="Merge PDFs", command=merge).grid(row=1, column=1, sticky=stickyFill, pady=3, padx=5)
tk.Button(selector, text="Update a single page", command=pageUpdate).grid(row=2, column=1, sticky=stickyFill, pady=3, padx=5)
tk.Button(selector, text="Insert a page into an existing PDF", command=insertPage, padx=20).grid(row=3, column=1, sticky=stickyFill, pady=3, padx=5)
tk.Button(selector, text="Delete a single page", command=deletePage).grid(row=4, column=1, sticky=stickyFill, pady=3, padx=5)
# Add the "Compress PDF" button to the GUI
tk.Button(selector, text="Compress PDF", command=compress).grid(row=6, column=1, sticky=stickyFill, pady=3, padx=5)
# Add the "Text Extraction" button to the GUI
tk.Button(selector, text="Extract Text from PDF", command=text_extraction).grid(row=7, column=1, sticky=stickyFill, pady=3, padx=5)
# Add the "Add Watermark" button to the GUI
tk.Button(selector, text="Add Watermark", command=add_watermark_gui).grid(row=8, column=1, sticky=stickyFill, pady=3, padx=5)
# Add the "Images to PDF" button to the GUI
tk.Button(selector, text="Images to PDF", command=images_to_pdf).grid(row=9, column=1, sticky=stickyFill, pady=3, padx=5)

tk.Button(selector, text="edit pdf", command=edit_pdf).grid(row=10, column=1, sticky=stickyFill, pady=3, padx=5)
selector.protocol("WM_DELETE_WINDOW", sys.exit)
selector.mainloop()
