import fs from "fs"
import pathModule from "path"

const [, , dirPath, name] = process.argv
const source = "./generator/src"
const destination = pathModule.join(dirPath, name)

const filesToCreate = [
  `${name}.stories.tsx`,
  `${name}.module.css`,
  `${name}.tsx`,
  `${name}.types.ts`,
]

const generate = async () => {
  try {
    await fs.promises.mkdir(destination, {recursive: true})

    for (const file of filesToCreate) {
      const sourceFile = pathModule.join(source, file.replace(name, "_NAME_"))
      const destinationFile = pathModule.join(destination, file)

      let fileContents = await fs.promises.readFile(sourceFile, "utf8")
      fileContents = fileContents.replace(/_NAME_/g, name)

      await fs.promises.writeFile(destinationFile, fileContents, "utf8")
    }

    console.log("Success!")
  } catch (err) {
    console.error(err)
  }
}

generate()
