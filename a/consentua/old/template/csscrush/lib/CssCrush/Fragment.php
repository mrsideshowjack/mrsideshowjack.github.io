<?php
/**
 *
 *  Fragments.
 *
 */
class CssCrush_Fragment extends CssCrush_Template
{
    public $name;

    public function __construct ($str, $options = array())
    {
        parent::__construct($str, $options);
        $this->name = $options['name'];
    }

    public function apply (array $args = null, $str = null)
    {
        $str = parent::apply($args);

        // Flatten all fragment calls within the template string.
        while (preg_match(CssCrush_Regex::$patt->fragmentInvoke, $str, $m, PREG_OFFSET_CAPTURE)) {

            $name = strtolower($m['name'][0]);
            $fragment = isset(CssCrush::$process->fragments[$name]) ? CssCrush::$process->fragments[$name] : null;

            $replacement = '';
            $start = $m[0][1];
            $length = strlen($m[0][0]);

            // Skip over same named fragments to avoid infinite recursion.
            if ($fragment && $name !== $this->name) {
                $args = array();
                if (isset($m['parens'][1])) {
                    $args = CssCrush_Function::parseArgs($m['parens_content'][0]);
                }
                $replacement = $fragment->apply($args);
            }
            $str = substr_replace($str, $replacement, $start, $length);
        }

        return $str;
    }
}
