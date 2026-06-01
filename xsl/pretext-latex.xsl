<?xml version="1.0" encoding="UTF-8"?>

<!--********************************************************************
Copyright 2020 Robert A. Beezer

This file is part of PreTeXt.

PreTeXt is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 or version 3 of the
License (at your option).

PreTeXt is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with PreTeXt.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************-->

<!-- This is the default LaTeX stylesheet for PreTeXt.  -->


<!-- Conveniences for classes of similar elements -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<!-- We override specific templates of the common conversion   -->
<xsl:import href="./core/pretext-latex.xsl" />
<!-- <xsl:import href="./pretext-latex-common.xsl" /> -->


<!-- Remove QR codes for interactive links -->
<!-- <xsl:template match="*" mode="static-qr"/>
<xsl:template match="*" mode="static-qr">
<xsl:text>\relax</xsl:text>
</xsl:template> -->

<!-- <xsl:template name="titlesec-chapter-style">
<xsl:text>
\titleformat{\chapter}[block]{\centering\normalfont\Large\sc}{Chapter \thechapter:}{0.5em}{}[]
</xsl:text>
</xsl:template>

<xsl:template name="titlesec-section-style">
<xsl:text>
\titleformat{\section}[block]{\titlerule\Large\bfseries}{\thesection :}{0.5em}{}[\vspace{6pt}\titlerule\vspace{0.5em}]
</xsl:text>
</xsl:template> -->

<xsl:param name="latex.preamble.late">
<xsl:text>\thinmuskip=4mu</xsl:text>
<xsl:text>\medmuskip=6mu plus 4mu minus 4mu</xsl:text>
<xsl:text>\thickmuskip=7mu plus 7mu</xsl:text>
<xsl:text>\scriptspace=1pt</xsl:text>
<xsl:text>\setlength{\parindent}{2em}
\setlength{\parskip}{0.5em}
\renewcommand{\baselinestretch}{1.2}
</xsl:text>
<xsl:text>\newcommand{\sectionbreak}{\ifnum\value{section}\gt 0 \clearpage\fi}</xsl:text>
<xsl:text>\AddToHook{cmd/chapter/before}{\clearpage}</xsl:text>
<xsl:text>
\titlecontents{chapter}[0em]{}{\contentslabel{1.5pc}}{}{\titlerule*[0.3pc]{.}\contentspage}
\titlecontents{section}[4pc]{}{\contentslabel{1.5pc}\quad}{}{\titlerule*[0.3pc]{.}\contentspage}
</xsl:text>
<xsl:text>\usepackage{cancel}</xsl:text>
</xsl:param>




<xsl:template match="definition" mode="tcb-style">
    <xsl:text>
      enhanced, 
      frame hidden,
      parbox=false,
      borderline={1pt}{1pt}{PineGreen!40},
      sharp corners, 
      colback=PineGreen!5, 
      colbacktitle=PineGreen!40, 
      coltitle=black, 
      boxed title style={sharp corners, frame hidden},
      fonttitle=\bfseries, 
      attach boxed title to top left={xshift=4mm,yshift=-4mm,yshifttext=-2mm},
      top=3mm,
      after skip=1em,
    </xsl:text>
</xsl:template>


<xsl:template match="theorem" mode="tcb-style">
    <xsl:text>
      enhanced, 
      frame hidden,
      parbox=false,
      borderline={1pt}{1pt}{red!75!black},
      sharp corners, 
      colback=red!2!white, 
      colbacktitle=red!50!white, 
      coltitle=black, 
      boxed title style={sharp corners, frame hidden},
      fonttitle=\bfseries, 
      attach boxed title to top left={xshift=4mm,yshift=-4mm,yshifttext=-2mm},
      top=3mm,
      after skip=1em,
    </xsl:text>
</xsl:template>



<xsl:template match="aside" mode="tcb-style">
    <xsl:text>
      runintitlestyle,
      enhanced, 
      frame hidden,
      parbox=false,
      borderline={1pt}{0mm}{Thistle!20},
      borderline west={1pt}{0mm}{Thistle!50},
      sharp corners, 
      colback=Thistle!20, 
      colbacktitle=Thistle!20, 
      coltitle=black, 
      top=2mm,
      title={By the way...},
      after title={\space}, 
      after skip=1em
    </xsl:text>
</xsl:template>



<xsl:template match="example" mode="tcb-style">
    <xsl:text>
      enhanced,
      breakable,
      parbox=false,
      frame hidden,
      borderline west={1pt}{0mm}{MidnightBlue},
      overlay unbroken and last={
        \draw[MidnightBlue, path fading=east, line width=.5pt] (frame.south west) -- (frame.south east);
      },
      colback=white,
      coltitle=white,
      fonttitle=\bfseries\sffamily,
      attach boxed title to top left={xshift=0mm},
      boxed title style={colback=MidnightBlue, sharp corners, colframe=MidnightBlue},
      boxed title size=title,
      after skip=1em,
      before skip=1em,
    </xsl:text>
</xsl:template>



<xsl:template match="objectives" mode="tcb-style">
  <xsl:text>
    enhanced,
    parbox=false,
    fonttitle=\bfseries\itshape\large,
    coltitle=black,
    attach boxed title to top left={xshift=5mm,yshift=-\tcboxedtitleheight/2-1mm,yshifttext=-2mm},
    boxed title style={frame hidden, colback=white, sharp corners},
    boxed title size=title,
    frame hidden,
    borderline horizontal={2pt}{0mm}{RoyalPurple!65!black},
    colback=white,
    width=0.98\linewidth,
    bottom=5mm,
    center,
    after skip=2em,
  </xsl:text>
</xsl:template>


</xsl:stylesheet>