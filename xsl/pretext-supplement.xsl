<?xml version="1.0" encoding="UTF-8"?>


<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<!-- Assumes current file is in mathbook/user -->
<xsl:import href="./core/pretext-html.xsl" />





<!-- Override: suppress the number in the TOC for "part", "chapter", and sections -->
<xsl:template match="part|chapter|section" mode="toc-item-properties">
    <xsl:variable name="the-url">
        <xsl:apply-templates select="." mode="url"/>
    </xsl:variable>
    <xsl:attribute name="class">
        <xsl:text>toc-item</xsl:text>
        <xsl:text> toc-</xsl:text><xsl:value-of select="translate(local-name(), '/', '-')"/>
    </xsl:attribute>
    <!-- copy id of this li for use in customization pass, will remove there -->
    <xsl:attribute name="uid">
        <xsl:value-of select="@unique-id"/>
    </xsl:attribute>
    <div class="toc-title-box">
        <a href="{$the-url}" class="internal">
            <!-- no codenumber span here: numbers omitted for part/chapter -->
            <span class="title">
                <xsl:apply-templates select="." mode="title-short" />
            </span>
        </a>
    </div>
</xsl:template>


<!-- Override: suppress the number in the page heading itself for   -->
<!-- "part" and "chapter" (the "type" label and title are unchanged, -->
<!-- so e.g. "II Course Notes" becomes just "Course Notes"). -->
<xsl:template match="part|chapter" mode="heading-content">
    <span class="type">
        <xsl:apply-templates select="." mode="type-name" />
    </span>
    <xsl:call-template name="space-styled"/>
    <span class="title">
        <xsl:apply-templates select="." mode="title-full" />
    </span>
</xsl:template>

<!-- Override: suppress the number in the subsidiary-division listing -->
<!-- (the button/hyperlink boxes on a part/chapter's own page) for    -->
<!-- "part" and "chapter" specifically.  priority="1" makes this win  -->
<!-- over the STRUCTURAL entity template above, which would otherwise -->
<!-- tie in default priority since both are name tests.               -->
<xsl:template match="part|chapter|worksheet|handout" mode="summary-nav" priority="1">
    <xsl:variable name="url">
        <xsl:apply-templates select="." mode="url" />
    </xsl:variable>
    <li>
        <a href="{$url}" class="internal">
            <!-- no codenumber span here: numbers omitted for part/chapter -->
            <span class="title">
                <xsl:apply-templates select="." mode="title-short" />
            </span>
        </a>
    </li>
</xsl:template>


<!-- Override: a worksheet/handout placed directly under a "part"     -->
<!-- (skipping the chapter level - schema-invalid but still compiles) -->
<!-- otherwise picks up its own top-level number. Suppress that number -->
<!-- here, but keep the print-to-PDF button, unlike the broader        -->
<!-- part|chapter override. Predicate-qualified match beats the plain  -->
<!-- name-list template below in priority, so only this exact case is  -->
<!-- affected; correctly-nested worksheets/handouts are untouched.     -->
<xsl:template match="worksheet[parent::part]|handout[parent::part]" mode="heading-content">
    <span class="type">
        <xsl:apply-templates select="." mode="type-name"/>
    </span>
    <xsl:call-template name="space-styled"/>
    <span class="title">
        <xsl:apply-templates select="." mode="title-full" />
    </span>
    <!-- keep the print preview button -->
    <xsl:apply-templates select="." mode="standalone-printout-links"/>
</xsl:template>


<!-- Same fix, for the TOC sidebar entry of a misnested worksheet/handout -->
<xsl:template match="worksheet[parent::part]|handout[parent::part]" mode="toc-item-properties">
    <xsl:variable name="the-url">
        <xsl:apply-templates select="." mode="url"/>
    </xsl:variable>
    <xsl:attribute name="class">
        <xsl:text>toc-item</xsl:text>
        <xsl:text> toc-</xsl:text><xsl:value-of select="translate(local-name(), '/', '-')"/>
    </xsl:attribute>
    <xsl:attribute name="uid">
        <xsl:value-of select="@unique-id"/>
    </xsl:attribute>
    <div class="toc-title-box">
        <a href="{$the-url}" class="internal">
            <span class="title">
                <xsl:apply-templates select="." mode="title-short" />
            </span>
        </a>
    </div>
</xsl:template>



</xsl:stylesheet>