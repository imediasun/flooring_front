<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: openapi/v3/openapi.proto

namespace Openapi\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The Header Object follows the structure of the Parameter Object with the following changes:  1. `name` MUST NOT be specified, it is given in the corresponding `headers` map. 1. `in` MUST NOT be specified, it is implicitly in `header`. 1. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`).
 *
 * Generated from protobuf message <code>openapi.v3.Header</code>
 */
class Header extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string description = 1;</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>bool required = 2;</code>
     */
    protected $required = false;
    /**
     * Generated from protobuf field <code>bool deprecated = 3;</code>
     */
    protected $deprecated = false;
    /**
     * Generated from protobuf field <code>bool allow_empty_value = 4;</code>
     */
    protected $allow_empty_value = false;
    /**
     * Generated from protobuf field <code>string style = 5;</code>
     */
    protected $style = '';
    /**
     * Generated from protobuf field <code>bool explode = 6;</code>
     */
    protected $explode = false;
    /**
     * Generated from protobuf field <code>bool allow_reserved = 7;</code>
     */
    protected $allow_reserved = false;
    /**
     * Generated from protobuf field <code>.openapi.v3.SchemaOrReference schema = 8;</code>
     */
    protected $schema = null;
    /**
     * Generated from protobuf field <code>.openapi.v3.Any example = 9;</code>
     */
    protected $example = null;
    /**
     * Generated from protobuf field <code>.openapi.v3.ExamplesOrReferences examples = 10;</code>
     */
    protected $examples = null;
    /**
     * Generated from protobuf field <code>.openapi.v3.MediaTypes content = 11;</code>
     */
    protected $content = null;
    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 12;</code>
     */
    private $specification_extension;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $description
     *     @type bool $required
     *     @type bool $deprecated
     *     @type bool $allow_empty_value
     *     @type string $style
     *     @type bool $explode
     *     @type bool $allow_reserved
     *     @type \Openapi\V3\SchemaOrReference $schema
     *     @type \Openapi\V3\Any $example
     *     @type \Openapi\V3\ExamplesOrReferences $examples
     *     @type \Openapi\V3\MediaTypes $content
     *     @type array<\Openapi\V3\NamedAny>|\Google\Protobuf\Internal\RepeatedField $specification_extension
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Openapi\V3\Openapi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string description = 1;</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool required = 2;</code>
     * @return bool
     */
    public function getRequired()
    {
        return $this->required;
    }

    /**
     * Generated from protobuf field <code>bool required = 2;</code>
     * @param bool $var
     * @return $this
     */
    public function setRequired($var)
    {
        GPBUtil::checkBool($var);
        $this->required = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool deprecated = 3;</code>
     * @return bool
     */
    public function getDeprecated()
    {
        return $this->deprecated;
    }

    /**
     * Generated from protobuf field <code>bool deprecated = 3;</code>
     * @param bool $var
     * @return $this
     */
    public function setDeprecated($var)
    {
        GPBUtil::checkBool($var);
        $this->deprecated = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool allow_empty_value = 4;</code>
     * @return bool
     */
    public function getAllowEmptyValue()
    {
        return $this->allow_empty_value;
    }

    /**
     * Generated from protobuf field <code>bool allow_empty_value = 4;</code>
     * @param bool $var
     * @return $this
     */
    public function setAllowEmptyValue($var)
    {
        GPBUtil::checkBool($var);
        $this->allow_empty_value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string style = 5;</code>
     * @return string
     */
    public function getStyle()
    {
        return $this->style;
    }

    /**
     * Generated from protobuf field <code>string style = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setStyle($var)
    {
        GPBUtil::checkString($var, True);
        $this->style = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool explode = 6;</code>
     * @return bool
     */
    public function getExplode()
    {
        return $this->explode;
    }

    /**
     * Generated from protobuf field <code>bool explode = 6;</code>
     * @param bool $var
     * @return $this
     */
    public function setExplode($var)
    {
        GPBUtil::checkBool($var);
        $this->explode = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool allow_reserved = 7;</code>
     * @return bool
     */
    public function getAllowReserved()
    {
        return $this->allow_reserved;
    }

    /**
     * Generated from protobuf field <code>bool allow_reserved = 7;</code>
     * @param bool $var
     * @return $this
     */
    public function setAllowReserved($var)
    {
        GPBUtil::checkBool($var);
        $this->allow_reserved = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.SchemaOrReference schema = 8;</code>
     * @return \Openapi\V3\SchemaOrReference|null
     */
    public function getSchema()
    {
        return $this->schema;
    }

    public function hasSchema()
    {
        return isset($this->schema);
    }

    public function clearSchema()
    {
        unset($this->schema);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.SchemaOrReference schema = 8;</code>
     * @param \Openapi\V3\SchemaOrReference $var
     * @return $this
     */
    public function setSchema($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\SchemaOrReference::class);
        $this->schema = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Any example = 9;</code>
     * @return \Openapi\V3\Any|null
     */
    public function getExample()
    {
        return $this->example;
    }

    public function hasExample()
    {
        return isset($this->example);
    }

    public function clearExample()
    {
        unset($this->example);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Any example = 9;</code>
     * @param \Openapi\V3\Any $var
     * @return $this
     */
    public function setExample($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\Any::class);
        $this->example = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.ExamplesOrReferences examples = 10;</code>
     * @return \Openapi\V3\ExamplesOrReferences|null
     */
    public function getExamples()
    {
        return $this->examples;
    }

    public function hasExamples()
    {
        return isset($this->examples);
    }

    public function clearExamples()
    {
        unset($this->examples);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.ExamplesOrReferences examples = 10;</code>
     * @param \Openapi\V3\ExamplesOrReferences $var
     * @return $this
     */
    public function setExamples($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\ExamplesOrReferences::class);
        $this->examples = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.MediaTypes content = 11;</code>
     * @return \Openapi\V3\MediaTypes|null
     */
    public function getContent()
    {
        return $this->content;
    }

    public function hasContent()
    {
        return isset($this->content);
    }

    public function clearContent()
    {
        unset($this->content);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.MediaTypes content = 11;</code>
     * @param \Openapi\V3\MediaTypes $var
     * @return $this
     */
    public function setContent($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\MediaTypes::class);
        $this->content = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 12;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSpecificationExtension()
    {
        return $this->specification_extension;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 12;</code>
     * @param array<\Openapi\V3\NamedAny>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSpecificationExtension($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Openapi\V3\NamedAny::class);
        $this->specification_extension = $arr;

        return $this;
    }

}

