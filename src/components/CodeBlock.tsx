"use client"

import { useState } from "react"
import "../styles/code-block.css"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

const CodeBlock = ({ code, title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block-container">
      {title && <div className="code-block-title">{title}</div>}
      <div className="code-block">
        <pre className="code-content">
          <code>{code}</code>
        </pre>
        <button className="copy-button" onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  )
}

export default CodeBlock
